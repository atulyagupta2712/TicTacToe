app.factory("myfactory", ()=>{
    const object = {
        buttons: [],
        state: false,
        createButtons(){
            for(let i = 1; i<=9; i++){
                this.buttons.push(new Button(i));
            } 
            return this.buttons;
        },
        writeButton(position){
            // console.log(write);
            this.state = this.buttons[position].toggle(this.state);
            // console.log(this.state);
            if(this.gameOver() == 'X'){
                return "Player X has won!";
            }
            else{
                if(this.gameOver() == 'O'){
                    return "Player 0 has won!";
                }
                else{
                    if(this.gameOver() == 'tied'){
                        return "Match tied";
                    }
                    else{
                        return false;
                    }
                }
            }
        },
        gameOver(){
           
            if(this.isNotEmpty(0)&& this.isNotEmpty(1) && this.isNotEmpty(2)){
                if(this.compareLine(0,1,2)){
                    return this.buttons[0].value;
                    console.log(this.buttons[0].value);
                }
            }
          
            if(this.isNotEmpty(3)&& this.isNotEmpty(4) && this.isNotEmpty(5)){
                if(this.compareLine(3,4,5)){
                    return this.buttons[3].value;
                }
            }
                
            
            if(this.isNotEmpty(6)&& this.isNotEmpty(7) && this.isNotEmpty(8)){
                if(this.compareLine(6,7,8)){
                    return this.buttons[6].value;
                }
            }
                    
            if(this.isNotEmpty(0)&& this.isNotEmpty(4) && this.isNotEmpty(8)){
                if(this.compareLine(0,4,8)){
                    return this.buttons[0].value;
                }
            }
                       
            if(this.isNotEmpty(2)&& this.isNotEmpty(4) && this.isNotEmpty(6)){
                if(this.compareLine(2,4,6)){
                    return this.buttons[2].value;
                }
            }
                           
            if(this.isNotEmpty(0)&& this.isNotEmpty(3) && this.isNotEmpty(6)){
                if(this.compareLine(0,3,6)){
                    return this.buttons[0].value;
                }
            }
                                
            if(this.isNotEmpty(1)&& this.isNotEmpty(4) && this.isNotEmpty(7)){
                if(this.compareLine(1,4,7)){
                    return this.buttons[1].value;
                }
            }
                                   
            if(this.isNotEmpty(2)&& this.isNotEmpty(5) && this.isNotEmpty(8)){
                if(this.compareLine(2,5,8)){
                    return this.buttons[2].value;
                }
            }
                                       
            if(this.isNotEmpty(0)&& this.isNotEmpty(1) && this.isNotEmpty(2) && this.isNotEmpty(3)&& this.isNotEmpty(4) && this.isNotEmpty(5)&& this.isNotEmpty(6)&& this.isNotEmpty(7) && this.isNotEmpty(8)){
                return "tied";
            }
                                            
            return false;
        },
        isNotEmpty(num){
            return this.buttons[num].value==''?false:true;
        },
        compareLine(one, two,three){
            if(this.buttons[one].value == this.buttons[two].value && this.buttons[three].value== this.buttons[two].value){
                return true;
            }
            return false;
        }
    }
    return object;
})