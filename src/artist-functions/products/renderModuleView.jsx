/* Stylesheets */
import '../styles/product-edit.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

function renderModuleView(moduleItem, index) {
    switch (moduleItem.type) {
        case 'title':
            return (
                <div className='prod-module prod-hover'
                    key={index}
                    id={moduleItem.id}
                    style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px`, textAlign: 'center' }}
                    onClick={() => selectModule(index)}>
                    {moduleItem.content}
                </div>
            );
        case 'text-input':
            return (
                <div className='prod-module prod-hover'
                    key={index}
                    id={moduleItem.id}
                    style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px` }}
                    onClick={() => selectModule(index)}>
                    {moduleItem.content}
                    {moduleItem.isRequired && <i className='prod-required' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
                    <p className='mock-textbox' style={{ marginTop: `7px` }}><br /></p>
                </div>
            );
        case 'txtblock-input':
            return (
                <div className='prod-module prod-hover'
                    key={index}
                    id={moduleItem.id}
                    style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px` }}
                    onClick={() => selectModule(index)}>
                    {moduleItem.content}
                    {moduleItem.isRequired && <i className='prod-required'>*</i>}
                    <p className='mock-textbox' style={{ marginTop: `7px` }}><br /><br /><br /></p>
                </div>
            );
    }
}