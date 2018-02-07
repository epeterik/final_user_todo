import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

export const Todos = (props) => {

    console.log("Entering Todos - props: ", props); //debug

    return (
        <div className="columns small-12 padding-vert-medium">                
            <h1>All To Do</h1>
            <h3>Subheading for content below</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis facilisis lorem, vitae egestas leo. Nulla at augue vulputate, sodales diam rutrum, rhoncus felis. Mauris vitae lacus sodales, ullamcorper felis sed, sodales est. Nullam volutpat leo mi, non pellentesque ante porttitor at. Integer a diam massa. Suspendisse cursus velit mi, eget accumsan massa eleifend vel. Phasellus ut placerat quam. Integer eleifend enim et elit malesuada, commodo congue ipsum tempor. Nulla feugiat leo vel magna feugiat bibendum. Sed eget eros vulputate, laoreet ante sit amet, malesuada nulla. Aenean id maximus ante, ac mattis ex.</p>
            <p>Integer vestibulum est in justo finibus faucibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut massa justo, scelerisque vitae auctor at, sagittis tincidunt risus. Duis aliquet est ante, non congue lectus fermentum sit amet. Aliquam iaculis laoreet risus eget vulputate. Etiam sodales condimentum odio, scelerisque pulvinar velit varius quis. Duis eu ex velit. Sed vel massa accumsan, bibendum nulla id, interdum elit. Duis sollicitudin cursus felis, id molestie risus hendrerit vel. Nulla id nisi vitae erat eleifend vestibulum a tempor neque. Donec neque dui, maximus sed ultrices nec, vestibulum nec ex. Donec tempor condimentum nisl, ac finibus ligula facilisis at. Quisque eu dui lacus. Sed lobortis elit nec consequat fermentum. Maecenas a erat ut risus vestibulum consectetur. Aliquam erat volutpat.</p>
        </div>
    );
}