import React from 'react';
import ImageGrid from './components/ImageGrid';
import ImageActions from './actions/ImageActions';

// Cada 5 segundos: recargar!
setInterval(function() {
    ImageActions.fetchList(); 
}, 5000);

React.render(
 <ImageGrid />,
 document.getElementById('container')
)
