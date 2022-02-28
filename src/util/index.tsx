import { ApiData } from "../interfaces/Frame.interface";


export interface List{
    data: ApiData[]
}
let list:List["data"] = [];

const loadData = async() => {  
  try{
    const rawdata1: Response = await fetch('./test-data/game_started.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    });
    const rawdata2 = await fetch('./test-data/first_frame_complete.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    });
    const rawdata3 = await fetch('./test-data/second_frame_in_progress.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    });
    const rawdata4 = await fetch('./test-data/second_frame_completed.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    });
    const rawdata5 = await fetch('./test-data/third_frame_strike_calculation.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    });
    const rawdata6 = await fetch('./test-data/game_ended.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    });
   
    list.push(await rawdata1.json(), await rawdata2.json(), 
              await rawdata3.json(), await rawdata4.json(), 
              await rawdata5.json(), await rawdata6.json()
            );
    return list;
  }catch(err){
    return err;
  }

}

loadData();

export default list;
