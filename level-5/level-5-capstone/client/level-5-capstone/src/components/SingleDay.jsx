import { useParams } from "react-router-dom"
import { useContext } from "react"
import { MealContext } from "../context/MealContext"
import AddFood from "./AddFood"
import SingleDayCSS from "./SingleDay.module.css"

function SingleDay(){
    const { dayID } = useParams()

    const {foodLogs, deleteSingleFood} = useContext(MealContext)

    const foundDay = foodLogs.find(log => log._id === dayID)

    // const singleDayStyle = {
    //     color: "white",
    //     padding: "10px",
    //     fontFamily: "Arial",
    //     textAlign: "center"
    // }

    // const logFoodStyle = {
    //   color: "white",
    //   padding: "10px",
    //   fontFamily: "Arial",
    //   textAlign: "center",
    //   alignItems: "center"
    // };

    // Need to find a way to get the ID of each food listed in the log
    // Maybe I can set a key
    const foodLogList = foundDay.foodLog.map(log => {
        return (
          <div className={SingleDayCSS.loggedFood} >
            <p>{log.food}</p>
            <button
              onClick={() => deleteSingleFood(log._id, dayID)}
              className={SingleDayCSS.removebtn}
            >
              Remove {log.food}
            </button>
          </div>
        );
    })
    return(
        <div className={SingleDayCSS.addFood}>
            <h1>{foundDay.date}</h1>
            <AddFood dayID={dayID}/>
            {foodLogList}

        </div>
    )
}

export default SingleDay