import { Signer } from "ethers";
import { ethers, network } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const flashContract = await ethers.getContractFactory("UniswapV3OracleWrapper");

  const deployContract = await flashContract.connect(owner).deploy("0x1F98431c8aD98523631AE4a59f267346ea31F984", "0xC36442b4a4522E871399CD717aBDD847Ab11FE88", "0xDaC8A8E6DBf8c690ec6815e0fF03491B2770255D");
  await deployContract.connect(owner).deployed();

   // print the address of the deployed contract
   console.log("Contract Deploy at", deployContract.address);

  console.log(await deployContract.getOnchainPositionData("100530806084711796546938868307054534935021688756287630503203483835945168404481"))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
