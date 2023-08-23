import { useState } from "react";
import { 
  Input, 
  InputGroup, 
  InputGroupText, 
  Label 
} from "reactstrap";
import addComma from "../utils/addComma";
import ErrorMessage from "./ErrorMessage";

const PriceInput = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');
  return (
    <div className="price-input-group">
      <Label className="price-input-label">入住費用 (每人每晚)</Label>
      <InputGroup>
        <InputGroupText className="price-input-text">TWD</InputGroupText>
        <Input 
          placeholder="請輸入費用"
          defaultValue={0}
          value={amount}
          invalid={error}
          onChange={e => {
            const value = e.target.value;
            if (value === '') {
              setAmount(value);
              setError('不可以為空白');
            } else {
              const reg = /,/g;
              setAmount(addComma(value.replace(reg, '')));
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
        className="price-input-label price-input-text-bottom-right"
      >
        輸入 0 表示免費
      </Label>
    </div>
  );
};

export default PriceInput;