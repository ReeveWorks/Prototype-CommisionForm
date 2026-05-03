// For reference only
function test() {

    return (
        <>
            Select Quantity
            <div className="module-container">
                <label for='rad1'>
                    <div className='radiobox'>
                        <input type='radio' id='rad1' name='quantity' className='prod-radio-buttons' />
                        1x | PHP 200
                    </div>
                </label>

                <label for='rad2'>
                    <div className='radiobox' for="rad2">
                        <input type='radio' id='rad2' name='quantity' className='prod-radio-buttons' />
                        5  x | PHP 800
                    </div>
                </label>

                <label for='rad3'>
                    <div className='radiobox' for="rad3">
                        <input type='radio' id='rad3' name='quantity' className='prod-radio-buttons' />
                        Other
                        <input type='number' className='input-textbox' placeholder='type custom quantity here!' />
                        label
                    </div>
                </label>

                <button className='radiobox-btn-addOptions'>
                    +
                </button>
            </div>
        </>
    );
}

export default test;