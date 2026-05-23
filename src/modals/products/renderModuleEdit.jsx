/* Stylesheets */
import '../../styles/product-edit.css'

function renderModuleEdit(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange) {
    switch (moduleItem.type) {
        case 'title':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px`, textAlign: 'center' }}
                        onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                </div>
            );
        case 'text-input':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px` }}
                        onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                    <p className='mock-textbox'><br /></p>
                </div>
            );
        case 'txtblock-input':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px` }}
                        onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                    <p className='mock-textbox'><br /><br /><br /></p>
                </div>
            );
        case 'Static Text':
            return (
                <div className='prod-module selected-module prod-hover'
                    key={moduleItem.id}
                    style={{ marginBottom: `${moduleItem.spacing}px` }}>
                    <input
                        type="text"
                        value={moduleItem.content}
                        style={{ fontSize: `${moduleItem.size}px`, textAlign: 'center' }}
                        onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "content")}
                        placeholder="Input text here*" />
                </div>
            );
    }
}

export default renderModuleEdit;