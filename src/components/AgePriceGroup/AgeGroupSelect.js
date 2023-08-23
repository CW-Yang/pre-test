import { Input, InputGroup, InputGroupText, Label } from "reactstrap";
import { useMemo, useState } from "react";

const AgeGroupSelect = () => {
  const ageOptions = useMemo(() => {
    const min = 0;
    const max = 20;
    const options = [];
    for (let i = min; i < max + 1; i++) {
      options.push(i);
    };
    return options;
  }, []);

  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(20);
  
  return (
    <div>
      <Label className="input-label">年齡</Label>
      <div className="d-flex align-items-center">
        <InputGroup>
          <Input
            type="select"
            onChange={e => {
              const value = e.target.value;
              setMinAge(value);
            }}
            value={minAge}
          >
            {
              ageOptions.map((option, i) => (
                <option 
                  key={i} 
                  value={option}
                  disabled={option > maxAge}
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
              const value = e.target.value;
              setMaxAge(value);
            }}
            value={maxAge}
          >
            {
              ageOptions.map((option, i) => (
                <option 
                  key={i} 
                  value={option}
                  disabled={option < minAge}
                >
                  {option}
                </option>
              ))
            }
          </Input>
        </InputGroup>
      </div>
    </div>
  );
};

export default AgeGroupSelect;