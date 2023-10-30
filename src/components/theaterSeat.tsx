import React, { useEffect, useState } from "react";
import "./seatStyle.scss";
import { useLocation, useParams } from "react-router-dom";
import StyleButton from "./styleButton";
import { Grid } from "@mui/material";
import { storeBookingSeats } from "../Api/api";

type Props = {
  seatQnty: number;
  selectedTheaterId:number;
};

const TheaterSeat: React.FC<Props> = ({ seatQnty ,selectedTheaterId}) => {
  const emptyGrid = new Array(seatQnty).fill(null);
  const [grid, setGrid] = useState(emptyGrid);
  const theaterName = useParams().name;
  // console.log("selectedTheaterId ",selectedTheaterId);
  
  // const [selectedSeats,setSeatedSelect]=useState<any>([]);

  //   const location = useLocation();
  //   console.log("location = ", location.state.capacity);

  const seatSelect = (index: number) => {
    if (grid[index] == null) {
      setGrid((grid) => {
        const gridCopy = grid.concat();
        gridCopy[index] = 1;
        return gridCopy;
      });
    } else if (grid[index] == 1) {
      setGrid((grid) => {
        const gridCopy = grid.concat();
        gridCopy[index] = null;
        return gridCopy;
      });
    } else {
      // const gridCopy = grid.concat();
      // gridCopy[index] = null;
      // return gridCopy
    }
  };

  useEffect(() => {
    // randomNumber(location.state?.capacity);
    // randomNumber(seatQnty);
  }, []);

  // const randomNumber = (seatQnty: number) => {
  //   // console.log("seatQnty -", seatQnty);
  //   for (let i = 0; i < seatQnty; i++) {
  //     let x = Math.floor(Math.random() * 100);
  //     if (grid[x] != 0) {
  //       setGrid((grid) => {
  //         const gridCopy = grid.concat();
  //         gridCopy[x] = 0;
  //         return gridCopy;
  //       });
  //     } else {
  //       i--;
  //     }
  //   }
  // };
  // console.log("selectSeat - ",grid);

  const seatBook = () => {
    let bookingSelect = grid.filter((x) => x == 1).length;
    const selectedSeats=[];
    if (bookingSelect > 0) {
      for (let i = 0; i < 100; i++) {
        if (grid[i] == 1) {
          selectedSeats.push(i);
          setGrid((grid) => {
            const gridCopy = grid.concat();
            gridCopy[i] = 0;
            return gridCopy;
          });
          
        } else {
        }
      }
      storeBookingSeats(selectedTheaterId,selectedSeats)
      console.log("selectedSeats =",selectedSeats);
  console.log("selectedTheaterId ",selectedTheaterId);
    }
  };

  return (
    <div>
      <h2>{theaterName}</h2>
      <div className="Container">
        {grid.map((value, index) => {
          return (
            <div
              className={
                grid[index] == 1
                  ? "selected_seat"
                  : grid[index] == 0
                  ? "booked_seat"
                  : "unselected_seat"
              }
              key={index}
              onClick={() => seatSelect(index)}
            ></div>
          );
        })}
      </div>
      <StyleButton label="submit" handleClick={seatBook} color="green" />
    </div>
  );
};

export default TheaterSeat;
