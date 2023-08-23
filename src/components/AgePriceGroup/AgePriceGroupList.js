import { 
  Container, 
  Label 
} from "reactstrap";
import AgeGroupSelect from "./AgeGroupSelect";
import PriceInput from "./PriceInput";
import { useCallback, useEffect, useState } from "react";
import { FiPlus } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';

const AgePriceGroupList = ({ onChange }) => {
  const initProps = {
    id: 0,
    ageGroup: [0, 20],
    price: 0
  }
  const [results, setResults] = useState([initProps]);

  const onAddItem = useCallback(() => {
    setResults([...results, { ...initProps, id: results.length }]);
  }, [results]);

  const onRemoveItem = useCallback(index => {
    const newArr = results.filter(result => result.id !== index); 
    setResults(newArr);
  }, [results]);

  useEffect(() => {
    onChange && onChange(results);
  }, [results]);

  return (
    <Container className="group-wrapper">
      {
        results.map((result, index) => (
          <div key={index} className="mb-3">
            <div className="d-flex justify-content-between">
              <Label>{`價格設定 - ${index + 1}`}</Label>
              {
                index !== 0 &&
                <div 
                  className="remove-item-button"
                  onClick={() => onRemoveItem(index)}
                >
                  <FaTimes />{' '}
                  移除
                </div>
              }
            </div>
            <div className='d-flex justify-content-between flex-wrap'>
              <AgeGroupSelect  
                ageGroup={result.ageGroup}
                onChange={val => {
                  const newArr = results.map((res, i) => {
                    if (i === index) {
                      return {
                        ...res,
                        ageGroup: val,
                      }
                    } else {
                      return res;
                    }
                  });
                  setResults(newArr);
                }}
              />
              <PriceInput 
                price={result.price}
                onChange={val => {
                  const newArr = results.map((res, i) => {
                    if (i === index) {
                      return {
                        ...res,
                        price: val,
                      }
                    } else {
                      return res;
                    }
                  });
                  setResults(newArr);
                }}
              />
            </div>
          </div>
        ))
      }
      <div 
        className="add-item-button"
        onClick={onAddItem}
      >
        <FiPlus />{' '}
        新增價格設定
      </div>
    </Container>
  );
};

export default AgePriceGroupList;