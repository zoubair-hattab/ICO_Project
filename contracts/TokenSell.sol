// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Token.sol";

contract TokenSell {
    address admin;
    Token public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;
    event Sell(address _buyer, uint256 _amount);

    constructor(Token _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice*10**18;
    }

    function multiply(uint256 x,uint256 y)internal pure returns(uint256 z){
        require(y==0||(z=x*y)/y==x);


    }
    function buyToken(uint256 _numberOfTokens)public payable{
        require(msg.value==multiply(_numberOfTokens,tokenPrice));
        require(tokenContract.balanceOf(address(this))>=_numberOfTokens);
        require(tokenContract.transfer(msg.sender, _numberOfTokens*10**18));
        tokensSold++;
        emit Sell(msg.sender,_numberOfTokens);
    }
    function endSale()public{
        require(msg.sender==admin);
        require(tokenContract.transfer(admin,tokenContract.balanceOf(address(this))));
        payable(admin).transfer(address(this).balance);
    }
}
