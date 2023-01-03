import { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import { Button, Card, Dropdown, Label } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./Custom";
import { Link } from "react-router-dom";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";

const AddressForm = ({ token, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const { register } = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    country: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      name: name,
    }),
  );

  const options = shippingOptions.map((so) => ({
    id: so.id,
    label: `${so.description} - (${so.price.formatted_with_symbol})`,
  }));

  const getShippingCountries = async (checkoutTokenId) => {
    const res = await commerce.services.localeListShippingCountries(
      checkoutTokenId,
    );
    setShippingCountries(res.countries);
    setShippingCountry(Object.keys(res.countries)[0]);
  };

  const getShippingSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode,
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const getShippingOptions = async (checkoutToken, country, region) => {
    const res = await commerce.checkout.getShippingOptions(checkoutToken, {
      country,
      region,
    });
    setShippingOptions(res);
    setShippingOption(res[0].id);
  };
  useEffect(() => {
    getShippingCountries(token?.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) getShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) {
      getShippingOptions(token?.id, shippingCountry, shippingSubdivision);
    }
  }, [shippingSubdivision]);

  const onSubmit = (data) => {
    next({ ...data, shippingCountry, shippingSubdivision, shippingOption });
  };
  return (
    <>
      <p className="text-center">shipping address</p>
      <div className="flex justify-center">
        <FormProvider {...methods}>
          <Card>
            <form
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <FormInput label="Name" name="name" placeholder="YourName" />
              <FormInput
                label="Address"
                name="address"
                placeholder="YourAddress"
              />
              <FormInput label="Email" name="email" placeholder="YourEmail" />
              <FormInput label="ZIP/POSTAL" name="zip" placeholder="YourZip" />
              <Dropdown
                label="Country"
                dismissOnClick={true}
                size="xs"
                value={shippingCountry}
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <div key={country.id}>
                    <Dropdown.Item value={country.country}>
                      {country.country}
                    </Dropdown.Item>
                  </div>
                ))}
              </Dropdown>
              <Dropdown
                label="subdivision"
                dismissOnClick={true}
                size="xs"
                placement="right"
                value={shippingSubdivision}
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <div key={subdivision.id}>
                    <Dropdown.Item value={subdivision.name}>
                      {subdivision.name}
                    </Dropdown.Item>
                  </div>
                ))}
              </Dropdown>
              <Dropdown
                label="Option"
                dismissOnClick={true}
                size="xs"
                placement="right"
                value={shippingOption}
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {options.map((option) => (
                  <div key={option.id}>
                    <Dropdown.Item value={option.name}>
                      {option.label}
                    </Dropdown.Item>
                  </div>
                ))}
              </Dropdown>
              <div className="flex gap-2">
                <Button gradientMonochrome="purple" size="xs">
                  <Link to="/cart"> Back to Cart</Link>
                </Button>
                <Button gradientMonochrome="purple" size="xs" type="submit">
                  pay
                </Button>
              </div>
            </form>
          </Card>
        </FormProvider>
      </div>
    </>
  );
};

export default AddressForm;
