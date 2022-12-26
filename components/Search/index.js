import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CustomSearch = () => {
    return (
        <InputGroup className="mb-3 w-50">
            <Form.Control
                placeholder="Video url"
                aria-label="video url"
                aria-describedby="basic-addon2"
            />
            <Button variant="dark" id="button-addon2">
                Add
            </Button>
        </InputGroup>
    )
}

export default CustomSearch;