const contractAddress = "0x8cf94f347418944648e3d66eed4e5c25274914b8";
var smartContract;
var smartContractWithSigner;
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "paramLocator",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramRenter",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramAddressHome",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "paramRentalValue",
				"type": "uint256"
			}
		],
		"name": "registerRental",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rentals",
		"outputs": [
			{
				"internalType": "string",
				"name": "locator",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "renter",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addressHome",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rentalValue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
