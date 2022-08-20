import styled from "styled-components";
import { device } from "../../devices";

//styles for filter
const FilterContainer = styled.div`
  /* Media query for mobile size of 280px */
  @media ${device.mobileS} {
    margin: 2em auto;
    max-width: 90%;
    height: 16vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Media query for mobile size of 768px */
  @media ${device.mobileM} {
    height: 20vh;
  }

  /* Media query for tablet */
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;
  }
`;

const SearchInput = styled.input`
  @media ${device.mobileS} {
    width: 100%;
    height: 6vh;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    outline: none;
    font-size: 1em;
    padding: 1em;

    &::placeholder {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.fontColor};
    }
  }

  @media ${device.mobileM} {
    height: 8vh;

    &::placeholder {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.fontColor};
    }
  }

  @media ${device.tablet} {
    width: 20em;
    height: 100%;
    font-size: 1.2em;
    padding: 1em;
  }

  @media ${device.laptop} {
    width: 25em;
    font-size: 1.2em;
    padding: 1em;

    &::placeholder {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.fontColor};
    }
  }
`;

const Select = styled.select`
  @media ${device.mobileS} {
    width: 14em;
    height: 6vh;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    font-size: 1em;
    padding: 0.5em;
  }

  @media ${device.mobileM} {
    height: 8vh;
  }

  @media ${device.tablet} {
    height: 100%;
  }

  @media ${device.laptop} {
    width: 14em;
    font-size: 1em;
    padding: 1em;
`;

const SelectOption = styled.option`
  padding-top: 2px;
  border-radius: 10px;
`;

const Filter = () => {
  return (
    <div>
      <FilterContainer className="container">
        <form>
          <SearchInput
            type="search"
            id="search"
            placeholder="Search for a country…"
          />
        </form>

        <Select name="continent" id="continent">
          <SelectOption value="Filter by Region">Filter by Region</SelectOption>
          <SelectOption value="Africa">Africa</SelectOption>
          <SelectOption value="America">America</SelectOption>
          <SelectOption value="Asia">Asia</SelectOption>
          <SelectOption value="Europe">Europe</SelectOption>
          <SelectOption value="Oceania">Oceania</SelectOption>
        </Select>
      </FilterContainer>
    </div>
  );
};

export default Filter;
