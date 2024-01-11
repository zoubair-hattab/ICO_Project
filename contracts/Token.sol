// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Token {
    string public name = "Test Token";
    string public symbol = "TEST";
    string public standard = "@Test Token version 0.1";
    uint256 public totalSupply;
    address public ownerOfContract;
    uint256 public _userId;
    address[] public holder;
    uint256 public Decimal = 18;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address _spender, uint256 _value);
    mapping(address => TokenHolderInfo) public tokenHolderInfos;
    struct TokenHolderInfo {
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 _initialSupply) {
        ownerOfContract = msg.sender;
        totalSupply = _initialSupply * 10 ** Decimal;
        balanceOf[msg.sender] = totalSupply;
    }

    function inc() internal {
        _userId++;
    }

    function HolderExists(address _to) private view returns (bool success) {
        for (uint256 i = 0; i < holder.length; i++) {
            if (holder[i] == _to) {
                return true;
            }
        }
    }

    function transfer(
        address _to,
        uint256 amount
    ) external returns (bool success) {
        require(
            balanceOf[msg.sender] >= amount,
            "You don't have enough balance of token"
        );
        require(_to != address(0));
        if (!HolderExists(_to)) {
            inc();
            holder.push(_to);
        }
        balanceOf[msg.sender] -= amount;
        balanceOf[_to] += amount;
        TokenHolderInfo storage tokenHolderInfo = tokenHolderInfos[_to];
        tokenHolderInfo._to = _to;
        tokenHolderInfo._from = msg.sender;
        tokenHolderInfo._tokenHolder = true;
        tokenHolderInfo._totalToken += amount;
        tokenHolderInfo._tokenId = _userId;
        emit Transfer(msg.sender, _to, amount);
        return true;
    }

    function approve(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _amount
    ) external returns (bool success) {
        require(_amount <= balanceOf[_from], "You don't have enough of toekn");
        require(
            allowance[_from][msg.sender] >= _amount,
            "you don't have enought allowance token"
        );
        balanceOf[_from] -= _amount;
        balanceOf[_to] += _amount;
        allowance[_from][msg.sender] -= _amount;
        emit Transfer(_from, _to, _amount);
        return true;
    }

    function getTokenHolderData(
        address _address
    ) public view returns (uint256, address, address, uint256, bool) {
        return (
            tokenHolderInfos[_address]._tokenId,
            tokenHolderInfos[_address]._to,
            tokenHolderInfos[_address]._from,
            tokenHolderInfos[_address]._totalToken,
            tokenHolderInfos[_address]._tokenHolder
        );
    }

    function getTokenHolder() public view returns (address[] memory) {
        return holder;
    }
}
