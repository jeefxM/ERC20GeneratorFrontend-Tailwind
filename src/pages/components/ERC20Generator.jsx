import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { ContractFactory } from "ethers";
import mytoken from "../utils/MyToken.json";
import UserInput from "./UserInput";
import { ethers } from "ethers";
import UserGuide from "./UserGuide";

function ERC20Generator(props) {
  const [formData, setFormData] = useState({
    Token: "",
    Symbol: "",
    Supply: "",
  });

  const abi = mytoken.abi;

  const createToken = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        //Getting the web3 provider of the User
        const provider = new ethers.providers.Web3Provider(
          web3.currentProvider
        );
        const signer = provider.getSigner();
        //Setting the contract with Abi and bytecodes.
        const contractFactory = new ContractFactory(
          abi,
          "0x60806040523480156200001157600080fd5b5060405162001d8738038062001d87833981810160405281019062000037919062000458565b838381600390816200004a919062000749565b5080600490816200005c919062000749565b5050506200009b8162000074620000a560201b60201c565b600a620000829190620009c0565b846200008f919062000a11565b620000ae60201b60201c565b5050505062000b48565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000120576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001179062000abd565b60405180910390fd5b62000134600083836200021b60201b60201c565b806002600082825462000148919062000adf565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001fb919062000b2b565b60405180910390a362000217600083836200022060201b60201c565b5050565b505050565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200028e8262000243565b810181811067ffffffffffffffff82111715620002b057620002af62000254565b5b80604052505050565b6000620002c562000225565b9050620002d3828262000283565b919050565b600067ffffffffffffffff821115620002f657620002f562000254565b5b620003018262000243565b9050602081019050919050565b60005b838110156200032e57808201518184015260208101905062000311565b60008484015250505050565b6000620003516200034b84620002d8565b620002b9565b90508281526020810184848401111562000370576200036f6200023e565b5b6200037d8482856200030e565b509392505050565b600082601f8301126200039d576200039c62000239565b5b8151620003af8482602086016200033a565b91505092915050565b6000819050919050565b620003cd81620003b8565b8114620003d957600080fd5b50565b600081519050620003ed81620003c2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200042082620003f3565b9050919050565b620004328162000413565b81146200043e57600080fd5b50565b600081519050620004528162000427565b92915050565b600080600080608085870312156200047557620004746200022f565b5b600085015167ffffffffffffffff81111562000496576200049562000234565b5b620004a48782880162000385565b945050602085015167ffffffffffffffff811115620004c857620004c762000234565b5b620004d68782880162000385565b9350506040620004e987828801620003dc565b9250506060620004fc8782880162000441565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200055b57607f821691505b60208210810362000571576200057062000513565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005db7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200059c565b620005e786836200059c565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200062a620006246200061e84620003b8565b620005ff565b620003b8565b9050919050565b6000819050919050565b620006468362000609565b6200065e620006558262000631565b848454620005a9565b825550505050565b600090565b6200067562000666565b620006828184846200063b565b505050565b5b81811015620006aa576200069e6000826200066b565b60018101905062000688565b5050565b601f821115620006f957620006c38162000577565b620006ce846200058c565b81016020851015620006de578190505b620006f6620006ed856200058c565b83018262000687565b50505b505050565b600082821c905092915050565b60006200071e60001984600802620006fe565b1980831691505092915050565b60006200073983836200070b565b9150826002028217905092915050565b620007548262000508565b67ffffffffffffffff81111562000770576200076f62000254565b5b6200077c825462000542565b62000789828285620006ae565b600060209050601f831160018114620007c15760008415620007ac578287015190505b620007b885826200072b565b86555062000828565b601f198416620007d18662000577565b60005b82811015620007fb57848901518255600182019150602085019450602081019050620007d4565b868310156200081b578489015162000817601f8916826200070b565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620008be5780860481111562000896576200089562000830565b5b6001851615620008a65780820291505b8081029050620008b6856200085f565b945062000876565b94509492505050565b600082620008d95760019050620009ac565b81620008e95760009050620009ac565b81600181146200090257600281146200090d5762000943565b6001915050620009ac565b60ff84111562000922576200092162000830565b5b8360020a9150848211156200093c576200093b62000830565b5b50620009ac565b5060208310610133831016604e8410600b84101617156200097d5782820a90508381111562000977576200097662000830565b5b620009ac565b6200098c84848460016200086c565b92509050818404811115620009a657620009a562000830565b5b81810290505b9392505050565b600060ff82169050919050565b6000620009cd82620003b8565b9150620009da83620009b3565b925062000a097fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620008c7565b905092915050565b600062000a1e82620003b8565b915062000a2b83620003b8565b925082820262000a3b81620003b8565b9150828204841483151762000a555762000a5462000830565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000aa5601f8362000a5c565b915062000ab28262000a6d565b602082019050919050565b6000602082019050818103600083015262000ad88162000a96565b9050919050565b600062000aec82620003b8565b915062000af983620003b8565b925082820190508082111562000b145762000b1362000830565b5b92915050565b62000b2581620003b8565b82525050565b600060208201905062000b42600083018462000b1a565b92915050565b61122f8062000b586000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b0c565b60405180910390f35b6100e660048036038101906100e19190610bc7565b610308565b6040516100f39190610c22565b60405180910390f35b61010461032b565b6040516101119190610c4c565b60405180910390f35b610134600480360381019061012f9190610c67565b610335565b6040516101419190610c22565b60405180910390f35b610152610364565b60405161015f9190610cd6565b60405180910390f35b610182600480360381019061017d9190610bc7565b61036d565b60405161018f9190610c22565b60405180910390f35b6101b260048036038101906101ad9190610cf1565b6103a4565b6040516101bf9190610c4c565b60405180910390f35b6101d06103ec565b6040516101dd9190610b0c565b60405180910390f35b61020060048036038101906101fb9190610bc7565b61047e565b60405161020d9190610c22565b60405180910390f35b610230600480360381019061022b9190610bc7565b6104f5565b60405161023d9190610c22565b60405180910390f35b610260600480360381019061025b9190610d1e565b610518565b60405161026d9190610c4c565b60405180910390f35b60606003805461028590610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d8d565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610ded565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d8d565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d8d565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610e93565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f25565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610fb7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c4c565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611023565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190611147565b60405180910390fd5b6108e5838383610a72565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610962906111d9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a599190610c4c565b60405180910390a3610a6c848484610a77565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab6578082015181840152602081019050610a9b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ade82610a7c565b610ae88185610a87565b9350610af8818560208601610a98565b610b0181610ac2565b840191505092915050565b60006020820190508181036000830152610b268184610ad3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b5e82610b33565b9050919050565b610b6e81610b53565b8114610b7957600080fd5b50565b600081359050610b8b81610b65565b92915050565b6000819050919050565b610ba481610b91565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b60008060408385031215610bde57610bdd610b2e565b5b6000610bec85828601610b7c565b9250506020610bfd85828601610bb2565b9150509250929050565b60008115159050919050565b610c1c81610c07565b82525050565b6000602082019050610c376000830184610c13565b92915050565b610c4681610b91565b82525050565b6000602082019050610c616000830184610c3d565b92915050565b600080600060608486031215610c8057610c7f610b2e565b5b6000610c8e86828701610b7c565b9350506020610c9f86828701610b7c565b9250506040610cb086828701610bb2565b9150509250925092565b600060ff82169050919050565b610cd081610cba565b82525050565b6000602082019050610ceb6000830184610cc7565b92915050565b600060208284031215610d0757610d06610b2e565b5b6000610d1584828501610b7c565b91505092915050565b60008060408385031215610d3557610d34610b2e565b5b6000610d4385828601610b7c565b9250506020610d5485828601610b7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da557607f821691505b602082108103610db857610db7610d5e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df882610b91565b9150610e0383610b91565b9250828201905080821115610e1b57610e1a610dbe565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610e7d602583610a87565b9150610e8882610e21565b604082019050919050565b60006020820190508181036000830152610eac81610e70565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f0f602483610a87565b9150610f1a82610eb3565b604082019050919050565b60006020820190508181036000830152610f3e81610f02565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa1602283610a87565b9150610fac82610f45565b604082019050919050565b60006020820190508181036000830152610fd081610f94565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061100d601d83610a87565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061109f602583610a87565b91506110aa82611043565b604082019050919050565b600060208201905081810360008301526110ce81611092565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611131602383610a87565b915061113c826110d5565b604082019050919050565b6000602082019050818103600083015261116081611124565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111c3602683610a87565b91506111ce82611167565b604082019050919050565b600060208201905081810360008301526111f2816111b6565b905091905056fea26469706673582212204b1635eb613cb48375188fc5dd3d993be1a0a08110535647be27748c0f6d945e64736f6c63430008110033",
          signer
        );

        //Initializing User input from specified fields
        const initialSupply = formData.Supply;
        const name = formData.Token;
        const symbol = formData.Symbol;
        const userAddress = await window.ethereum.enable();

        //deploying the contract with arguments
        const ercContract = await contractFactory.deploy(
          name,
          symbol,
          initialSupply,
          userAddress.toString()
        );

        //retrieving the hash from the contract deployment and setting the value in setTransactionHash
        const hash = ercContract.deployTransaction.hash;
        console.log("Mining --: ", hash);
        props.setTransactionHash(hash);
        const transactionRecipt = await ercContract.deployed();

        //getting back the contract address and setting the value in setContractAddress
        const address = transactionRecipt.address;
        props.setContractAddress(address);
        console.log("Mined at: ", hash);
      } else {
        console.log("Ethereum object does not exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-auto px-20 my-32 h-auto py-16 bg-slate-200 gap-5 flex-wrap rounded-lg font-poppins max-md:px-2 max-sm:w-80 max-md:w-196 max-md:justify-start ">
      <h1 className="text-3xl m max-md:text-xl font-semibold">oliver said hi</h1>
      <p className="max-md:text-xs">
        {props.activeAccount &&
          ` Selected Account: ${props.activeAccount} (${props.balance.slice(
            0,
            4
          )} eth)`}
      </p>

      <p>{props.chainId && `Selected Chain: ${props.chainId}`}</p>
      <div className="flex flex-col gap-4 justify-center flex-wrap w-96 max-md:w-56">
        <UserInput formData={formData} setFormData={setFormData} />
      </div>
      <Button
        variant="contained"
        onClick={createToken}
        className="w-40 max-md:w-32 "
        style={{ backgroundColor: "#6B7280" }}
      >
        Submit
      </Button>
      <div className="max max-sm:text-xss max-md:text-0.5 bottom-0">
        {" "}
        <p>
          {props.transactionHash
            ? `transaction hash: ${props.transactionHash}`
            : ""}
        </p>
        <p>
          {props.contractAddress
            ? `Contract deployed at : ${props.contractAddress}`
            : ""}
        </p>
      </div>
      <UserGuide />
    </div>
  );
}

export default ERC20Generator;
