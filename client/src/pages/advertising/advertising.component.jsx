import { useState } from "react";
import "./advertising.styles.scss";
import InputBar from "../../components/inputBar/inputbar.component";
("../../components/inputBar/inputbar.component");
import AdvertisingProgress from "../../components/progress/advertisingprogress.component";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const storage = getStorage(app);
const Advertising = () => {
	const [progress, setProgress] = useState(1);
	const { currentUser } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [files, setFiles] = useState([]);
	const [formData, setFormData] = useState({
		imageUrls: [],
		title: "",
		description: "",
		address: "",
		bedrooms: null,
		bathrooms: null,
		price: null,
		type: "",
		warmingType: "",
		area: "",
		ageOfBuilding: null,
	});
	const [imageUploadError, setImageUploadError] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleImageSubmit = (e) => {
		if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
			setUploading(true);
			setImageUploadError(false);
			const promises = [];
			for (let i = 0; i < files.length; i++) {
				promises.push(storeImage(files[i]));
			}
			console.log(promises);
			Promise.all(promises)
				.then((urls) => {
					setFormData({
						...formData,
						imageUrls: formData.imageUrls.concat(urls),
					});
					console.log(formData, urls, "DHAJKSHDAKJSC");
					setImageUploadError(false);
					setUploading(false);
				})
				.catch((err) => {
					setImageUploadError("Image upload failed (2 mb max per image)");
					setUploading(false);
				});
			console.log(uploading);
		} else {
			setImageUploadError("You can only upload 6 images per listing");
			setUploading(false);
		}
	};

	// const storeImage = async (file) => {
	// 	return new Promise((resolve, reject) => {
	// 		if (!file) {
	// 			console.error("No file selected for upload");
	// 			return;
	// 		}
	// 		// Create a storage reference
	// 		const storageReference = storageRef(storage, `images/${file.name}`);
	// 		console.log(storageReference);
	// 		// Upload file to Firebase Storage
	// 		uploadBytes(storageReference, file)
	// 			.then((snapshot) => {
	// 				console.log("Uploaded a blob or file!", snapshot);

	// 				// Optionally, you can retrieve the URL of the uploaded file
	// 				getDownloadURL(snapshot.ref).then((downloadURL) => {
	// 					console.log("File available at", downloadURL);
	// 				});
	// 			})
	// 			.catch((error) => {
	// 				console.error("Error uploading file:", error);
	// 			});
	// 	});
	// };

	const storeImage = async (file) => {
		// If no file is provided, reject the promise
		if (!file) {
			console.error("No file selected for upload");
			return Promise.reject("No file selected for upload");
		}

		// Create a storage reference
		const storageReference = storageRef(storage, `images/${file.name}`);
		console.log(storageReference);

		// Return a promise that resolves with the download URL
		return uploadBytes(storageReference, file)
			.then((snapshot) => {
				console.log("Uploaded a blob or file!", snapshot);

				// Get the download URL
				return getDownloadURL(snapshot.ref);
			})
			.then((downloadURL) => {
				console.log("File available at", downloadURL);
				return downloadURL; // Resolve with the URL
			})
			.catch((error) => {
				console.error("Error uploading file:", error);
				throw error; // Reject the promise if there's an error
			});
	};

	const handleRemoveImage = (index) => {
		setFormData({
			...formData,
			imageUrls: formData.imageUrls.filter((_, i) => i !== index),
		});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		console.log("clicked");
		e.preventDefault();
		try {
			if (files.length < 1) return setError("You must upload at least one image");
			setLoading(true);
			setError(false);
			const res = await fetch("http://localhost:3000/api/listing/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...formData,
					userRef: currentUser._id,
				}),
			});
			const data = await res.json();
			console.log(
				JSON.stringify({
					...formData,
					userRef: currentUser._id,
				})
			);
			setLoading(false);
			if (data.success === false) {
				setError(data.message);
			}
			console.log("created");
			navigate(`/`);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};
	return (
		<section className='advertising'>
			<form className='advertising__form'>
				<AdvertisingProgress progress={progress} />
				<InputBar type='text' id='title' value={formData.title} placeholder='Title' onChange={handleChange} />
				<InputBar
					type='textarea'
					id='description'
					value={formData.description}
					placeholder='Description'
					onChange={handleChange}
				/>
				<InputBar type='number' id='price' value={formData.price} placeholder='Price' onChange={handleChange} />
				<InputBar
					type='number'
					id='bedrooms'
					value={formData.bedrooms}
					placeholder='Number of bedrooms'
					onChange={handleChange}
				/>
				<InputBar
					type='number'
					id='bathrooms'
					value={formData.bathrooms}
					placeholder='Number of bathrooms'
					onChange={handleChange}
				/>
				<InputBar type='text' id='area' value={formData.area} placeholder='Net area' onChange={handleChange} />
				<InputBar
					type='text'
					id='warmingType'
					value={formData.warmingType}
					placeholder='Warming type'
					onChange={handleChange}
				/>
				<InputBar
					type='text'
					id='type'
					value={formData.type}
					placeholder='Type: rent/ sell / daily'
					onChange={handleChange}
				/>
				<InputBar
					type='number'
					id='ageOfBuilding'
					value={formData.ageOfBuilding}
					placeholder='Age of building'
					onChange={handleChange}
				/>
				<InputBar
					type='text'
					id='address'
					value={formData.address}
					placeholder='Address'
					onChange={handleChange}
				/>
				<div className='flex flex-col flex-1 gap-4'>
					<p className='font-semibold'>
						Images:
						<span className='font-normal text-gray-600 ml-2'>
							The first image will be the cover (max 6)
						</span>
					</p>
					<div className='flex gap-4'>
						<input
							onChange={(e) => setFiles(e.target.files)}
							className='p-3 border border-gray-300 rounded w-full'
							type='file'
							id='images'
							accept='image/*'
							multiple
						/>
						<button
							type='button'
							disabled={uploading}
							onClick={handleImageSubmit}
							className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
						>
							{uploading ? "Uploading..." : "Upload"}
						</button>
					</div>
					<p className='text-red-700 text-sm'>{imageUploadError && imageUploadError}</p>
					{formData.imageUrls.length > 0 &&
						formData.imageUrls.map((url, index) => (
							<div key={url} className='flex justify-between p-3 border items-center'>
								<img src={url} alt='listing image' className='w-20 h-20 object-contain rounded-lg' />
								<button
									type='button'
									onClick={() => handleRemoveImage(index)}
									className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
								>
									Delete
								</button>
							</div>
						))}
					<button
						disabled={loading || uploading}
						onClick={handleSubmit}
						className='p-3 bg-red-600 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
					>
						{loading ? "Creating..." : "Create listing"}
					</button>
					{error && <p className='text-slate-700 text-sm'>{error}</p>}
				</div>
			</form>
		</section>
	);
};

export default Advertising;
