/* Stylesheets */
import './styles/renderModuleView.css'

function renderModuleView(moduleItem, index, setIsEditing, groupEditing) {
    function renderRequiredMarker() {
        if (!moduleItem.isRequired) return null;

        return (
            <i className='txt-accent' style={{ fontSize: `${moduleItem.size}px`, marginLeft: '2px' }}>
                *
            </i>
        );
    }

    function handleEmptyContent() {
        const hasContent = moduleItem.content?.toString().trim() !== '';

        if (!hasContent) {
            return (
                <>
                    <p className='empty-text'>Input text here{renderRequiredMarker()}</p>
                </>
            );
        }

        return (
            <>
                <span>{moduleItem.content}</span>
                {renderRequiredMarker()}
            </> 
        );
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