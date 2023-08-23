import { 
  Container, 
  Label 
} from "reactstrap";

const AgePriceGroupWrapper = ({ children, index=1 }) => {
  return (
    <Container className="group-wrapper">
      <Label>{`價格設定 - ${index}`}</Label>
      <div className='d-flex justify-content-between flex-wrap'>
        {children}
      </div>
    </Container>
  );
};

export default AgePriceGroupWrapper;