export class likeButton {
    
    constructor(private numberOfLikes?:number,private state?:boolean ){

    }

    click (){
        if(this.state == false)
        {
            this.numberOfLikes++;
            this.state = true;

        }else{
            this.numberOfLikes--;
            this.state = false;
        }
        console.log('number of likes : ' + this.numberOfLikes +' state : '+ this.state);
    }



}