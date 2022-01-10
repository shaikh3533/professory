import React from 'react';

const FilterBar = () => {
    return (
        <div className=" mt-4 p-4 h-auto h-md-100">
            <form>
                <div className="btm_bordr">
                    <p className="mb-2 FS_18 Bold">Filter By</p>
                </div>
                <p className="my-3 FS_17 Bold">Date</p>
                <div class="radio">
                    <label className='FS_14'><input type="radio" name="date" /> Latest</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="date" /> 1 Week</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="date" /> 1 Month</label>
                </div>
                <p className="my-3 FS_18 Bold">Type</p>
                <div class="radio">
                    <label><input type="radio" name="type" /> Requested</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="type" /> For Sale</label>
                </div>
            </form>
        </div>
    );
}

export default FilterBar;