// const square =function(x)
// {
//     return x*x
// }
// const square =(x) => {
//     return x*x
// }

// const square =(x) => x*x
// console.log(square(5))

const event={
    name: 'Birthday Party',
    guestList: ['A','B','C','D'],
    // PrintGuestList: function(){
    //     console.log('guest List for '+ this.name)
    // }
    PrintGuestList (){
        //const that=this
        console.log('guest List for '+ this.name)
        //***if we use the arrow function the 'this' keyword can be used of the parent function
        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending '+this.name)
        })
    }
}
event.PrintGuestList();