// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getAppliedJobs();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    // else {
    //     const newQuantity = quantity + 1;
    //     appliedJobs[id] = newQuantity;
    // }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}


const getAppliedJobs = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedAppliedJobs = localStorage.getItem('applied-jobs');
    if (storedAppliedJobs) {
        appliedJobs = JSON.parse(storedAppliedJobs);
    }
    return appliedJobs;
}


export {
    addToDb,
    getAppliedJobs,
}
