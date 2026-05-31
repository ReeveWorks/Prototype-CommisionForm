/* Stylesheets */
import './styles/renderModuleView.css'

function renderModuleView(moduleItem, index, setIsEditing) {
    switch (moduleItem.type) {
        case 'Static Text':
            return (
                <div className='productView-container'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        fontWeight: moduleItem.bold ? 'bold' : 'normal',
                        textAlignLast: `${moduleItem.textAlign}`,
                        marginBottom: `${moduleItem.spacing}px`,
                        fontSize: `${moduleItem.size}px`
                    }}
                    onClick={() => setIsEditing(index)}>
                    {moduleItem.content}
                </div>
            );
        case 'Text Input':
            return (
                <div className='productView-container'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        fontWeight: moduleItem.bold ? 'bold' : 'normal',
                        textAlignLast: `${moduleItem.textAlign}`,
                        marginBottom: `${moduleItem.spacing}px`,
                        fontSize: `${moduleItem.size}px`
                    }}
                    onClick={() => setIsEditing(index)}>

                    {moduleItem.content}
                    {moduleItem.isRequired && <i className='txt-accent' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
                    
                    <p className='mock-textbox'>
                        {
                            moduleItem.textbox == true
                                ?
                                <div><br /><br /><br /></div>
                                :
                                <br />
                        }
                    </p>
                </div>
            );

    }
}

export default renderModuleView;