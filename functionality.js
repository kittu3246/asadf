// function show()
// {
//     var elems = document.querySelector('.sidebar');
//     elems.style.display = 'flex';
// }


var sidebarOpen = false;
var dots3 = document.querySelector('.humburge');
function show() {
    var sidebar = document.querySelector('.sidebar');
    
    // console.log("this is show function...");


    // if (sidebarOpen) {
    //     // Close the sidebar
    //     // dots3.style.display = 'flex';
        
    //     dots3.style.right=0;
    //     sidebar.style.display = 'none';
    // } else {
        sidebar.style.display = 'flex';
        dots3.style.display = 'none';
    // }
}

function close1() {
    console.log("this is close function...");
    
    var sidebar = document.querySelector('.sidebar');
    dots3.style.display = 'flex';
    
    sidebar.style.display = 'none';
    dots3.classList.remove('rotate-icon');
}
