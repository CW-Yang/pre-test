import { Input, InputGroup, InputGroupText, Label } from "reactstrap";
import { useMemo, useState } from "react";
import ErrorMessage from "../ErrorMessage";

const AgeGroupSelect = ({ ageGroup, onChange, overlapIntervals }) => {
  const ageOptions = useMemo(() => {
    const min = 0;
    const max = 20;
    const options = [];
    for (let i = min; i < max + 1; i++) {
      options.push(i);
    };
    return options;
  }, []);

  const isInvalid = overlapIntervals.find(interval => interval.find(i => i === ageGroup[0] || i === ageGroup[1])) ? true : false;
  // console.log(isInvalid);
  return (
    <div>
      <Label className="input-label">年齡</Label>
      <div className="d-flex align-items-center">
        <InputGroup>
          <Input
            type="select"
            onChange={e => {
              const value = +e.target.value;
              onChange([value, ageGroup[1]]);
            }}
            value={ageGroup[0]}
            invalid={isInvalid}
          >
            {
              ageOptions.map((option, i) => (
                <option 
                  key={i} 
                  value={option}
                  disabled={option > ageGroup[1]}
                >
                  {option}
                </option>
              ))
            }
          </Input>
          <InputGroupText>~</InputGroupText>
          <Input
            type="select"
            onChange={e => {
              const value = +e.target.value;
              onChange([ageGroup[0], value]);
            }}
            value={ageGroup[1]}
            invalid={isInvalid}
          >
            {
              ageOptions.map((option, i) => (
                <option 
                  key={i} 
                  value={option}
                  disabled={option < ageGroup[0]}
                >
                  {option}
                </option>
              ))
            }
          </Input>
        </InputGroup>
      </div>
      {
          isInvalid && 
          <ErrorMessage message={'年齡區間不可重疊'}/>
        }
    </div>
  );
};

export default AgeGroupSelect;