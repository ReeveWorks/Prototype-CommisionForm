/* Stylesheets */
import '../../styles/product-edit.css'

function renderEditTab(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange, DeleteModule) {
    return (
        <div className='prod-edit-tab' style={{ fontSize: `${moduleItem.size}px` }}>
            <div className='prod-edit-tab-elements'>
                {moduleItem.type.includes("input")
                    ?
                    <label className='clickable'>
                        <input type="checkbox" className='prod-hover' checked={moduleItem.isRequired} onChange={() => handleChangeModule(!moduleItem.isRequired, moduleItem.id, "isRequired")} />
                        {moduleItem.id}
                    </label>
                    :
                    <label className='prod-edit-tab-noborder'>{moduleItem.id}</label>
                }

                <p className='txt-base'>Tt</p>
                <input type='number' maxLength="2"
                    value={moduleItem.size}
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "size", 0, 50)} />

                <p className='txt-base'>↧↧</p>
                <input type='number' maxLength="2"
                    value={moduleItem.spacing}
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "spacing", 0, 250)} />
            </div>

            <div className='prod-edit-tab-buttons'>
                <button className='txt-base use-icon' onClick={() => DeleteModule(moduleItem.id)}>1</button>
                <button className='txt-base use-icon' onClick={() => setIsEditing(-1)}>0</button>
            </div>
        </div>
    );
}

export default renderEditTab;