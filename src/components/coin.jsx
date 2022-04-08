import { Col, Container, Row, Table } from "reactstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Coin() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);
  return (
    <>
      <div className="container-main">
        <Container>
          <Row>
            <Col md="12">
              <Table className="mt-4" dark>
                <thead>
                  <th>#</th>
                  <th>Coins name</th>
                  <th>Current price</th>
                  <th>Market cap change</th>
                </thead>

                <tbody>
                  {coins &&
                    coins.map((el, index) => (
                      <tr>
                        <td>{index + 1}</td>

                        <td>
                          <img className="img" src={el.image} />
                          {el.name}
                        </td>
                        <td>{el.current_price} $</td>

                        {el.market_cap_change_percentage_24h > 0 ? (
                          <td className="green-percent">
                            {el.market_cap_change_percentage_24h} %
                          </td>
                        ) : (
                          <td className="red-percent">
                            {el.market_cap_change_percentage_24h}%
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Coin;
