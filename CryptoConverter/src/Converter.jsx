import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, Select } from "antd";
import { FaBitcoin } from "react-icons/fa";

function Converter() {
  const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

  const defaultFirstSelectValue = "Bitcoin";
  const defaultSecondSelectValue = "Ether";
   
  const [cryptoList, setCryptoList] = useState([]);
  const [inputValue, setInputValue] = useState("0");

  const [firstSelect, setFirstSelect] = useState(defaultFirstSelectValue);
  const [secondSelect, setSecondSelect] = useState(defaultSecondSelectValue);

  const [value,setValue]=useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{ 
    if(cryptoList.length>0){
    const  firstObj=cryptoList.find((item)=>{
      return item.value===firstSelect
    })
    
    const  SecondObj=cryptoList.find((item)=>{
      return item.value===secondSelect
    })

    setValue(((inputValue*SecondObj.rate)/firstObj.rate).toFixed(6));
  }
  },[inputValue,firstSelect,secondSelect])

  async function fetchData() {
    const res = await fetch(apiUrl);
    const jsondata = await res.json();
    const data = jsondata.rates;

    const tempArray = Object.entries(data).map((item) => {
      return {
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
    });

    setCryptoList(tempArray);
  }

  return (
    <div className="container">
      <Card className="crypto-card" title={<h1> <FaBitcoin/> Crypto Converter</h1>}>
        <Form size="large">
          <Form.Item>
            <Input onChange={(event)=>setInputValue(event.target.value)} placeholder="Type the value here"  />
          </Form.Item>
        </Form>
        <div className="selct-box">
          <Select
            style={{ width: "190px" }}
            defaultValue={defaultFirstSelectValue}
            options={cryptoList}
            onChange={(value)=>setFirstSelect(value)}
          />
          <Select
            style={{ width: "190px" }}
            defaultValue={defaultSecondSelectValue}
            options={cryptoList}
            onChange={(value)=>setSecondSelect(value)}
          />
        </div>
        <p>{inputValue} {firstSelect}={value} {secondSelect}</p>
      </Card>
    </div>
  );
}

export default Converter;
