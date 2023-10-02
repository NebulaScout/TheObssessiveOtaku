import React,{ useState } from 'react';
import { storage, db} from '../config/firebase.config.js'
// import { collection } from "firebase/firestore";

// const usersCollectionRef = collection(db, 'users');

export const AddProducts = () => {

    const [productName, setProductName] = useState('');     //default value undefined
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');     //Only shows when errors are encountered while adding products

    const types = ['image/png', 'image/jpeg']    //Allows only images to be selected

    //Add product image
    const productImgHandler = (e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        } else {
            setProductImg(null);
            setError('Please select a valid image type(png or jpeg)');
        }
    }

    //Add product form submit event
    const addProduct = (e) => {
        e.preventDefault();
        // console.log(productName, productPrice, productImg);
        //Storing the image
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => {
            setError(err.message);
        }, () => {
            //Gets product url and if success the storing the product in db
            storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
              db.collection('Products').add({
                productName: productName,
                productPrice: Number(productPrice),
                productImg: url
              }).then(() => {
                setProductName('');
                setProductPrice(0);
                setProductImg('');
                setError('');
                document.getElementById('file').value = '';
              }).catch(err => setError(err.message));
            })
        })
    }

  return (
    <div className='container'>
        <br />
        <h2>ADD PRODUCTS</h2>
        <hr />
        <form autoComplete='off' className='form-group' onSubmit={ addProduct}>
            <label htmlFor='product-name'>Product Name:</label>
            <input type='text' className='form-control' required 
                 onChange={(e) => setProductName(e.target.value)} value={ productName } />     {/*Sets the state to whatever the user enters in that field*/}
            <br />
            <label htmlFor='product-price'>Product Price:</label>
            <input type='number' className='form-control' required 
                onChange={(e) => setProductPrice(e.target.value)} value={ productPrice } />
            <br />
            <label htmlFor='product-img'>Product Image:</label>
            <br />
            <input type='file' className='form-control' onChange={ productImgHandler } id='file' />    {/*productImgHandler selects the user selected file*/}
            <br />
            <button className='btn btn-success btn-md mybtn'>ADD</button>
        </form>
        { error && <span>{ error }</span>}
    </div>
  )
}

