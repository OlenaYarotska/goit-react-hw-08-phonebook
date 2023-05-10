import { getFilter, filter } from 'redux/contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';
import { FormWrapper, Label, Input } from './Filter.styled';


const Filter = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(getFilter);
  const handleChange = evt => dispatch(filter(evt.currentTarget.value.trim()));
  return (
    <FormWrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filterSelector}
          onChange={handleChange}
        />
      </Label>
    </FormWrapper>
  );
};
export default Filter;