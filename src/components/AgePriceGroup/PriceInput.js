import { useState } from "react";
import { 
  Input, 
  InputGroup, 
  InputGroupText, 
  Label 
} from "reactstrap";
import ErrorMessage from "../ErrorMessage";
import addComma from "../../utils/addComma";

const PriceInput = ({ price, onChange }) => {
  const [error, setError] = useState('');
  return (
    <div>
      <Label className="input-label">入住費用 (每人每晚)</Label>
      <InputGroup>
        <InputGroupText className="input-text">TWD</InputGroupText>
        <Input 
          placeholder="請輸入費用"
          defaultValue={0}
          value={price}
          invalid={error}
          onChange={e => {
            const value = e.target.value;
            const reg = /^(0|[1-9][0-9.,]*)$/;
            if (value.length === 0) {
              onChange();
              setError('不可以為空白');
            } else if (reg.test(value)) {
              const comma = /,/g;
              onChange(addComma(value.replace(comma, '')));
              setError('');
            }
          }}
        />
      </InputGroup>
      {
        error && 
        <ErrorMessage message={error}/>
      }
      <Label 
        className="input-label input-text-bottom-right"
      >
        輸入 0 表示免費
      </Label>
    </div>
  );
};

export default PriceInput;