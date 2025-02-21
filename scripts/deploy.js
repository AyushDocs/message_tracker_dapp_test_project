// scripts/deploy.js

const hre=require('hardhat')

async function main() {
    const Chai = await hre.ethers.getContractFactory("chai");
    console.log("Deploying Chai contract...");
    const chai = await Chai.deploy();
    await chai.waitForDeployment()
    const address=await chai.getAddress()
    // console.log("Chai contract deployed to:", chai.getAddress());
    return chai
}

// Execute deployment
main()
    .then(async (chai) =>{ 
        let address=await chai.getAddress()
        console.log("Chai contract deployed to:", address);
        
        process.exit(0);})
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
