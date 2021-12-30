class_uiux = document.getElementsByClassName('uiux-btn');
class_jv = document.getElementsByClassName('jv-btn');
class_3d = document.getElementsByClassName('p3d-btn');

function clearAll(){
    for (j = 0; j < class_jv.length; j += 1) {
        class_jv[j].style.clear();
    }
    for (i = 0; i < class_uiux.length; i += 1) {
        class_uiux[i].style.clear();
    }
    for (m = 0; m < class_3d.length; m += 1) {
        class_3d[m].style.clear();
    }
}

function setOpacityAll(){
    document.getElementById('all').style.opacity= 1;
    document.getElementById('p3d').style.opacity= 0.6;
    document.getElementById('uiux').style.opacity= 0.6;
    document.getElementById('jv').style.opacity= 0.6;
}

function setOpacityJV(){
    document.getElementById('all').style.opacity= 0.6;
    document.getElementById('p3d').style.opacity= 0.6;
    document.getElementById('uiux').style.opacity= 0.6;
    document.getElementById('jv').style.opacity= 1;
}

function setOpacity3D(){
    document.getElementById('all').style.opacity= 0.6;
    document.getElementById('p3d').style.opacity= 1;
    document.getElementById('uiux').style.opacity= 0.6;
    document.getElementById('jv').style.opacity= 0.6;
}

function setOpacityUIUX(){
    document.getElementById('all').style.opacity= 0.6;
    document.getElementById('p3d').style.opacity= 0.6;
    document.getElementById('uiux').style.opacity= 1;
    document.getElementById('jv').style.opacity= 0.6;
}

function showALL() {
    for (j = 0; j < class_jv.length; j += 1) {
        class_jv[j].style.display = 'inline';
    }
    for (i = 0; i < class_uiux.length; i += 1) {
        class_uiux[i].style.display = 'inline';
    }
    for (m = 0; m < class_3d.length; m += 1) {
        class_3d[m].style.display = 'inline';
    }
}

function show3D() {
    document.getElementById('p3d').style.opacity= 1;
    showALL()
    for (j = 0; j < class_jv.length; j += 1) {
        class_jv[j].style.display = 'none';
    }
    for (i = 0; i < class_uiux.length; i += 1) {
        class_uiux[i].style.display = 'none';
    }
    
}

function showJV() {
    document.getElementById('jv').style.opacity= 1;
    showALL()
    for (m = 0; m < class_3d.length; m += 1) {
        class_3d[m].style.display = 'none';
    }
    for (i = 0; i < class_uiux.length; i += 1) {
        class_uiux[i].style.display = 'none';
    }
    
}

function showUIUX() {
    document.getElementById('uiux').style.opacity= 1;
    showALL()
    for (j = 0; j < class_jv.length; j += 1) {
        class_jv[j].style.display = 'none';
    }
    for (m = 0; m < class_3d.length; m += 1) {
        class_3d[m].style.display = 'none';
    }
    
}