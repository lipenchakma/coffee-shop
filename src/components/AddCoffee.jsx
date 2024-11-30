import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, chef, supplier, taste, category, details, photo,}
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){

            }
        })
    }

    return (
        <div className="w-6/12 mx-auto">
            <div className="text-center my-6">
                <h2 className="mt-10 text-4xl text-red-500 font-bold my-6">Add New Coffee </h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div>
                    <div className="flex justify-between">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-bold">Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Enter coffee name " className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-bold">Chef</span>
                            </div>
                            <input type="text" name="chef" placeholder="Enter coffee Chef " className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-bold">Supplier</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier " className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-bold">Taste</span>
                            </div>
                            <input type="text" name="taste" placeholder="Enter coffee Taste " className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-bold">Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Enter coffee category " className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-bold">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Enter coffee details " className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl font-bold">Photo</span>
                            </div>
                            <input type="text" name="photo" placeholder="Enter photoURL " className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-error mt-6 w-full"/>
            </form>
        </div>
    );
};

export default AddCoffee;