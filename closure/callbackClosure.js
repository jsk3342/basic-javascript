var fruits = ['apple', 'banana', 'peach']
var $ul = document.createElement('ul')

fruits.forEach(function (fruits) {
    var $li = document.createElement('li')
    $li.innerHTML = fruits;
    $li.addEventListener('click', function () {
        alert('your choice is ' + fruits)
    })
    $ul.appendChild($li)
})

document.body.appendChild($ul)