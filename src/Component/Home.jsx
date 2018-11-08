import React from "react";
import styled from "styled-components";
import { request_transaction } from "../actions/home_action";
import { connect } from "react-redux";
import { Table, Button } from "antd";
import FormtTime from '../util/FormtTime'
const columns = [
  {
    title: "blockHeight",
    dataIndex: "blockHeight",
  },

  {
    title: "transaction_id",
    dataIndex: "transaction_id",
  },
  {
    title: "type",
    dataIndex: "transactionName",
 
  },
  {
    title: "from",
    render:(record)=>{
      if(record.transactionName=="transfer"){
        return `${record.from }`
      }else{
        return record.caller
      }
    }
  },
  {
    title: "to",
    render:(record)=>{
      if(record.transactionName=="transfer"){
        return `${record.to}`
      }else{
        return record.contract_name 
      }
    }
  } ,
  {
    title: "value",
    render:(record)=>{
      if(record.transactionName=="transfer"){
        return `${record.amount}`
      }else{
        return record.method 
      }
    }

  },
  {
    title: "time",
    dataIndex: "expiration",
  },

];
const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  background-color: #f8f8f8;
  padding-top: 40px;
  padding-bottom:30px;
`;
const Middle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.getHometransactions(1);
  }
  render() {
    const { transactions,fetching } = this.props;
    console.log(transactions)
    return (
      <Container>
        <Middle>
          <Table
            loading={fetching}
            rowKey="transaction_id"
            columns={columns}
            dataSource={transactions.sort((a,b)=>b.blockHeight-a.blockHeight)}
            expandedRowRender={record =><p style={{ margin: 0 }}>{record.args}</p>}
            pagination={{
              pageSize:20,
              hideOnSinglePage:true
            }}
            size="middle"
          />
        </Middle>
      </Container>
    );
  }
}
export default connect(
  state => {
    return { ...state.HomeReducer.transactionObj };
  },
  dispacth => {
    return {
      getHometransactions: payload => {
        dispacth(request_transaction(payload));
      }
    };
  }
)(Home);
