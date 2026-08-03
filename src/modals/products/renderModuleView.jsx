/* Stylesheets */
import './styles/renderModuleView.css'

function renderModuleView(moduleItem, index, setIsEditing) {
    function handleEmptyContent() {
        if (moduleItem.content.trim() === '') {
            return (
                <div>
                    <p className='empty-text'>Input text here<span className='txt-accent'>*</span></p>
                    {moduleItem.isRequired && <i className='txt-accent' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
                </div>
            );
        }
        else {
            return (
                <div>
                    {moduleItem.content}
                    {moduleItem.isRequired && <i className='txt-accent' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
                </div>
            );
        }
    }

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
                    onClick={() => setIsEditing(moduleItem.id)}>
                    {handleEmptyContent()}
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
                    onClick={() => setIsEditing(moduleItem.id)}>

                    <p className='mock-textbox' style={{ fontSize: `${moduleItem.size}px` }}>
                        {
                            moduleItem.textbox == true
                                ?
                                <>{handleEmptyContent()} <br /><br /></>
                                :
                                handleEmptyContent()
                        }
                    </p>
                </div>
            );
        case 'Number Input':
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
                    onClick={() => setIsEditing(moduleItem.id)}>

                    <p className='mock-textbox' style={{ fontSize: `${moduleItem.size}px` }}>
                        {handleEmptyContent()}
                    </p>
                </div>
            );
        case 'Container Box':
            return (
                <div className='productView-container container-box'
                    key={index}
                    id={moduleItem.id}
                    style={{
                        marginBottom: `${moduleItem.spacing}px`,
                    }}>

                </div>
            );

    }
}

export default renderModuleView;