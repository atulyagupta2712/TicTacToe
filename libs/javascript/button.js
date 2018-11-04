class Button{
    constructor(position){
        this.position = position;
        this.value = "";

    }
    toggle(state){
        if(!this.value){
            this.value = state?'X':'O';
            state = !state;
        }
        return state;
    }

}