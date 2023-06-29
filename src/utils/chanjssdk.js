(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.chanjssdk = factory());
}(this, (function () { 'use strict';

    const global = window;

    const CHAIN_RPC = {
      56: 'https://bsc-dataseed.binance.org',
      97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
    };
    const CHAIN_BROWSER = {
      56: 'https://bscscan.com',
      97: 'https://testnet.bscscan.com'
    };
    const ContractsAddr = {
      56: {
        Equip721: '0x82aaE51de5015ad4b86F656Fb093A3a386c6204f',
        EquipLogic: '0x1474cCf8E2B9f9821Ba4AdFa42456eAE416d236A',
        Hero20: '0x6A3d70b49DC2DF48E2098EB0eb7563b5B533739f',
        Hero721: '0x4948aCc61B7976007fa9Fb21A36c6D8eD73B3489',
        Hero1155: '0xe10e9F5822a9Bf57b85C2d0F3E1e06F642A4E8A4',
        HeroLogic: '0x36aD468E7d10d359D910a4F309Ec3c2Fce1c8Eb5',
        HeroMarket: '0xB5011e405A17353Bb95b78D7f0B5A5EfCF4e126d',
        EquipMarket: '0x89Dbb5D179d010DFE30202a922195b1da5095F73'
      },
      97: {
        Equip721: '0x259927d0C4DdA0219b6DbdE61E03592EbA649C4A',
        EquipLogic: '0x1474cCf8E2B9f9821Ba4AdFa42456eAE416d236A',
        Hero20: '0x6A3d70b49DC2DF48E2098EB0eb7563b5B533739f',
        Hero721: '0x4948aCc61B7976007fa9Fb21A36c6D8eD73B3489',
        Hero1155: '0xe10e9F5822a9Bf57b85C2d0F3E1e06F642A4E8A4',
        HeroLogic: '0xA7F27Ac6DD336B5Eed731a2971001E7844f3D0Ef',
        HeroMarket: '0x46BBc01F0DeE27d8363d7A1b3f1C7f7a09BBa9a7',
        EquipMarket: '0xD4d963E0823fB00b69aCEF5Ff9CDaEa167017F78'
      }
    };
    const GAS = 500000; //const GAS = 21000

    var chainWeb3 = null;

    class ChainWeb3 {
      constructor() {
        this.ethereum = null;
        this.web3 = null;
        this.ZERO_ADDR = '0x0000000000000000000000000000000000000000';
        this.apiModules = [];
      }

      registerModule(module) {
        this.apiModules.push(module);
      }

      initModules() {
        console.log('initModules...');

        for (let module of this.apiModules) {
          module.initialize();
        }

        for (let module of this.apiModules) {
          module.initAfter();
        }
      }

      handleNewChain(chainId) {
        console.log('handleNewChain:', chainId);
        chainWeb3.initModules();
      }

      handleNewAccounts(newAccounts) {
        console.log('handleNewAccounts:', newAccounts);
      }

      async connectMetamask() {
        console.log('connectMetamask');

        if (!window.ethereum || !window.ethereum.isMetaMask) {
          console.log('not found Metamask');
          return Promise.reject('not found Metamask');
        } else {
          await window.ethereum.request({
            method: 'eth_requestAccounts'
          });

          if (this.web3) {
            return Promise.resolve(this.getAccount());
          }

          this.ethereum = window.ethereum;
          this.web3 = new Web3(this.ethereum);
          this.ethereum.on('chainChanged', chainWeb3.handleNewChain);
          this.ethereum.on('accountsChanged', chainWeb3.handleNewAccounts);

          if (this.ethereum.chainId) {
            console.log('ethereum chainid', this.getChainId());
            chainWeb3.handleNewChain(this.getChainId());
          }

          return Promise.resolve(this.getAccount());
        }
      }

      async connectNoMetamask(chainId) {
        console.log('connectNoMetamask', chainId);
        this.ethereum = {};
        this.ethereum.chainId = chainId;
        this.web3 = new Web3(CHAIN_RPC[chainId]);
        chainWeb3.handleNewChain(this.getChainId());
      }

      getAccount() {
        return this.ethereum.selectedAddress;
      }

      getChainId() {
        return Number(this.ethereum.chainId);
      }

      getEtherscanAddress(address) {
        return CHAIN_BROWSER[this.getChainId()] + '/address/' + address;
      }

      getEtherscanTx(tx) {
        return CHAIN_BROWSER[this.getChainId()] + '/tx/' + tx;
      }

      getContractAddr(name) {
        return ContractsAddr[this.getChainId()][name];
      }

      isZeroAddress(addr) {
        return addr == this.ZERO_ADDR;
      }

      async getBlockNumber() {
        return this.web3.eth.getBlockNumber();
      }

      async sign(msg) {
        let hexmsg = this.web3.utils.utf8ToHex(msg);
        return this.web3.eth.sign(hexmsg, this.getAccount());
      }

      verifySignature(msg, signature) {
        return this.web3.eth.accounts.recover(msg, signature);
      }

    }

    chainWeb3 = new ChainWeb3();
    var chainWeb3$1 = chainWeb3;

    var HeroLogicABI = [
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "hero721",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "hero1155",
    				type: "address"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "constructor"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: false,
    				internalType: "address",
    				name: "buyer",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "quality_box",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "EventBuyHero",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenid",
    				type: "uint256"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "quality_box",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "quality_hero",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "job",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "appearance",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "skill1",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "skill2",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint32",
    				name: "nick",
    				type: "uint32"
    			}
    		],
    		name: "EventOpenHero",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenid",
    				type: "uint256"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "burnTokenId",
    				type: "uint256"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "fromStars",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "toStars",
    				type: "uint8"
    			}
    		],
    		name: "EventUpHeroStar",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint8",
    				name: "quality",
    				type: "uint8"
    			}
    		],
    		name: "buyHeroBox",
    		outputs: [
    		],
    		stateMutability: "payable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "getHeroBoxLimit",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero1155_",
    		outputs: [
    			{
    				internalType: "contract IHero1155",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero721_",
    		outputs: [
    			{
    				internalType: "contract IHero721",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero_box_price1_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero_box_price2_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero_box_price3_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero_limit1_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero_limit2_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero_limit3_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "max_hero_star_",
    		outputs: [
    			{
    				internalType: "uint32",
    				name: "",
    				type: "uint32"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "nick_count_",
    		outputs: [
    			{
    				internalType: "uint32",
    				name: "",
    				type: "uint32"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "openHero",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "hero721",
    				type: "address"
    			}
    		],
    		name: "setHero721",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint8",
    				name: "quality",
    				type: "uint8"
    			},
    			{
    				internalType: "uint256",
    				name: "count",
    				type: "uint256"
    			},
    			{
    				internalType: "bool",
    				name: "is_reset",
    				type: "bool"
    			}
    		],
    		name: "setHeroBoxLimit",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint8",
    				name: "quality",
    				type: "uint8"
    			},
    			{
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "setHeroBoxQualityPrice",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint32",
    				name: "max_hero_star",
    				type: "uint32"
    			}
    		],
    		name: "setMaxHeroStar",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint32",
    				name: "nick_count",
    				type: "uint32"
    			}
    		],
    		name: "setNickCount",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "token_id_burn",
    				type: "uint256"
    			}
    		],
    		name: "upHeroStar",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "withdraw",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	}
    ];

    class Base {
      constructor(provider, abi, name) {
        this.provider = provider;
        this.abi = abi;
        this.name = name;
        this.address = '';
        provider.registerModule(this);
      }

      initialize() {
        console.log('Base initialize:', this.name);

        try {
          this.address = this.provider.getContractAddr(this.name);

          if (this.address) {
            this.contract = new this.provider.web3.eth.Contract(this.abi, this.address);
          } else {
            console.error('Base initialize address:', this.name, this.address);
          }
        } catch (e) {
          console.error('fail to init contract:', this.name, e);
        }
      }

      initAfter() {}

    }

    class HeroLogic extends Base {
      constructor(provider) {
        super(provider, HeroLogicABI, 'HeroLogic');
      }
      /**
       * @dev 查询剩余盲盒的数量
       * @return 3个品质对应的数量，顺序低中高
       */


      async getHeroBoxLimit() {
        return await this.contract.methods.getHeroBoxLimit().call();
      }
      /**
       * @dev 查询盲盒的卖价
       * @return 3个品质对应的价格，顺序低中高
       */


      async getHeroBoxPrice() {
        try {
          let p1 = await this.contract.methods.hero_box_price1_().call();
          let p2 = await this.contract.methods.hero_box_price2_().call();
          let p3 = await this.contract.methods.hero_box_price3_().call();
          return [Web3.utils.fromWei(p1, 'ether'), Web3.utils.fromWei(p2, 'ether'), Web3.utils.fromWei(p3, 'ether')];
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 购买盲盒
       * @param {quality 品质(1,2,3),1最差品质,3最好品质}
       */


      async buyHeroBox(quality) {
        try {
          let price;

          if (quality == 1) {
            price = await this.contract.methods.hero_box_price1_().call();
          } else if (quality == 2) {
            price = await this.contract.methods.hero_box_price2_().call();
          } else if (quality == 3) {
            price = await this.contract.methods.hero_box_price3_().call();
          } else {
            return Promise.reject('buyHeroBox error quality!');
          }

          return await this.contract.methods.buyHeroBox(quality).send({
            from: this.provider.getAccount(),
            value: price,
            gas: GAS
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 开盲盒
       * @param {token_id 玩家当前拥有的token}
       */


      async openHero(token_id) {
        return await this.contract.methods.openHero(token_id).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 英雄升星,需要两个token具备同品质同星级同职业
       * @param {token_id 待升星的英雄}
       * @param {token_id_burn 将要被吃掉的英雄}
       */


      async upHeroStar(token_id, token_id_burn) {
        return await this.contract.methods.upHeroStar(token_id, token_id_burn).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 管理员接口，查询英雄合约当前的收益
       */


      async getBalance() {
        try {
          let amount = await this.provider.web3.eth.getBalance(this.address);
          return Web3.utils.fromWei(amount, 'ether');
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 管理员接口，只有合约拥有者才能调用，提币(卖盲盒的收益)
       */


      async withdraw() {
        return await this.contract.methods.withdraw().send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 管理员接口，只有合约拥有者才能调用，设置英雄盲盒价格
       * @param {quality 品质(1,2,3),1最差品质,3最好品质}
       * @param {price 价格(币安币)}
       */


      async setHeroBoxQualityPrice(quality, price) {
        let wei_amount = new this.provider.web3.utils.BN(Web3.utils.toWei(String(price), 'ether'));
        return await this.contract.methods.setHeroBoxQualityPrice(quality, wei_amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 管理员接口，设置盲盒首发或者增发数量
       * @param {quality 品质(1,2,3),1最差品质,3最好品质}
       * @param {count 数量}
       * @param {is_reset 为true时重置合约对应品质的数量，为false时合约内剩余数量+count(增发)}
       */


      async setHeroBoxLimit(quality, count, is_reset) {
        return await this.contract.methods.setHeroBoxLimit(quality, count, is_reset).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }

      decodeEventBuyHero(receipt) {
        let kv = {
          buyer: receipt.events.EventBuyHero.returnValues.buyer,
          quality_box: receipt.events.EventBuyHero.returnValues.quality_box,
          price: receipt.events.EventBuyHero.returnValues.price,
          tokenid: this.provider.web3.utils.hexToNumber(receipt.events[0].raw.topics[3])
        };
        return kv;
      }

      decodeEventOpenHero(receipt) {
        let kv = {
          tokenid: receipt.events.EventOpenHero.returnValues.tokenid,
          owner: receipt.events.EventOpenHero.returnValues.owner,
          quality_box: receipt.events.EventOpenHero.returnValues.quality_box,
          quality_hero: receipt.events.EventOpenHero.returnValues.quality_hero,
          job: receipt.events.EventOpenHero.returnValues.job,
          appearance: receipt.events.EventOpenHero.returnValues.appearance,
          skill1: receipt.events.EventOpenHero.returnValues.skill1,
          skill2: receipt.events.EventOpenHero.returnValues.skill2,
          nick: receipt.events.EventOpenHero.returnValues.nick
        };
        return kv;
      }

      decodeEventUpHeroStar(receipt) {
        let kv = {
          tokenid: receipt.events.EventUpHeroStar.returnValues.tokenid,
          burnTokenId: receipt.events.EventUpHeroStar.returnValues.burnTokenId,
          owner: receipt.events.EventUpHeroStar.returnValues.owner,
          fromStars: receipt.events.EventUpHeroStar.returnValues.fromStars,
          toStars: receipt.events.EventUpHeroStar.returnValues.toStars
        };
        return kv;
      }

    }

    var Hero721ABI = [
    	{
    		inputs: [
    			{
    				internalType: "string",
    				name: "name",
    				type: "string"
    			},
    			{
    				internalType: "string",
    				name: "symbol",
    				type: "string"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "constructor"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "approved",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "Approval",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "bool",
    				name: "approved",
    				type: "bool"
    			}
    		],
    		name: "ApprovalForAll",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "Transfer",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "approve",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			}
    		],
    		name: "balanceOf",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "burn",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				components: [
    					{
    						internalType: "bool",
    						name: "opened",
    						type: "bool"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_hero",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "stars",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "appearance",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint32",
    						name: "nick",
    						type: "uint32"
    					}
    				],
    				internalType: "struct HeroMetaData",
    				name: "meta",
    				type: "tuple"
    			}
    		],
    		name: "createMetaTo",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "exists",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "getApproved",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "getMeta",
    		outputs: [
    			{
    				components: [
    					{
    						internalType: "bool",
    						name: "opened",
    						type: "bool"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_hero",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "stars",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "appearance",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint32",
    						name: "nick",
    						type: "uint32"
    					}
    				],
    				internalType: "struct HeroMetaData",
    				name: "",
    				type: "tuple"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			}
    		],
    		name: "getMetas",
    		outputs: [
    			{
    				internalType: "uint256[]",
    				name: "",
    				type: "uint256[]"
    			},
    			{
    				components: [
    					{
    						internalType: "bool",
    						name: "opened",
    						type: "bool"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_hero",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "stars",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "appearance",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint32",
    						name: "nick",
    						type: "uint32"
    					}
    				],
    				internalType: "struct HeroMetaData[]",
    				name: "",
    				type: "tuple[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			}
    		],
    		name: "getTokens",
    		outputs: [
    			{
    				internalType: "uint256[]",
    				name: "",
    				type: "uint256[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			}
    		],
    		name: "isApprovedForAll",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "logic_contract_",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "market_contract_",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "name",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "ownerOf",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "safeTransferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			},
    			{
    				internalType: "bytes",
    				name: "_data",
    				type: "bytes"
    			}
    		],
    		name: "safeTransferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				internalType: "bool",
    				name: "approved",
    				type: "bool"
    			}
    		],
    		name: "setApprovalForAll",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "string",
    				name: "base_token_uri",
    				type: "string"
    			}
    		],
    		name: "setBaseTokenURI",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "logic_contract",
    				type: "address"
    			}
    		],
    		name: "setLogicContract",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "market_contract",
    				type: "address"
    			}
    		],
    		name: "setMarketContract",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				components: [
    					{
    						internalType: "bool",
    						name: "opened",
    						type: "bool"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_hero",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "stars",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "appearance",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "skill2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint32",
    						name: "nick",
    						type: "uint32"
    					}
    				],
    				internalType: "struct HeroMetaData",
    				name: "meta",
    				type: "tuple"
    			}
    		],
    		name: "setMeta",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "bytes4",
    				name: "interfaceId",
    				type: "bytes4"
    			}
    		],
    		name: "supportsInterface",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "symbol",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "index",
    				type: "uint256"
    			}
    		],
    		name: "tokenByIndex",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "index",
    				type: "uint256"
    			}
    		],
    		name: "tokenOfOwnerByIndex",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "tokenURI",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "totalSupply",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "transferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	}
    ];

    class Hero721 extends Base {
      constructor(provider) {
        super(provider, Hero721ABI, 'Hero721');
      }
      /**
       * @dev 根据 token id, 查询用户 token 的数量
       * @param account string 账户地址
       * @return 币的数量
       */


      async balanceOf(account) {
        return await this.contract.methods.balanceOf(account).call();
      }
      /**
       * @dev 查询账户下所有的token
       * @param {account 账户地址}
       * @return tokenid数组
       */


      async getTokens(account) {
        return await this.contract.methods.getTokens(account).call();
      }
      /**
       * @dev 查询账户下所有的元数据
       * @param {account 账户地址}
       * @return tokenid数组,HeroMetaData数组
       */


      async getMetas(account) {
        return await this.contract.methods.getMetas(account).call();
      }
      /**
       * @dev 查询单个token元数据
       * @param {token_id nft id}
       * @return HeroMetaData
       */


      async getMeta(token_id) {
        return await this.contract.methods.getMeta(token_id).call();
      }
      /**
       * @dev 授权市场操作
       * @param {operator 授权地址}
       * @param {approved 权限}
       */


      async setApprovalForAll(operator, approved) {
        return await this.contract.methods.setApprovalForAll(operator, approved).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 授权市场操作
       * @param {operator 授权地址}
       * @return bool
       */


      async isApprovedForAll(operator) {
        return await this.contract.methods.isApprovedForAll(this.provider.getAccount(), operator).call();
      }

    }

    var EquipLogicABI = [
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "equip721",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "hero1155",
    				type: "address"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "constructor"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "buyer",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			},
    			{
    				components: [
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_equip",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "level",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "pos",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type3",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type4",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type5",
    						type: "uint8"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value1",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value2",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value3",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value4",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value5",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "base_attr",
    						type: "uint16"
    					}
    				],
    				indexed: false,
    				internalType: "struct EquipMetaData",
    				name: "meta",
    				type: "tuple"
    			}
    		],
    		name: "EventBuyEquip",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenid",
    				type: "uint256"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256[]",
    				name: "ids",
    				type: "uint256[]"
    			},
    			{
    				indexed: false,
    				internalType: "uint256[]",
    				name: "amounts",
    				type: "uint256[]"
    			}
    		],
    		name: "EventDecompseEquip",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenid",
    				type: "uint256"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "oldLevel",
    				type: "uint8"
    			},
    			{
    				indexed: false,
    				internalType: "uint8",
    				name: "curLevel",
    				type: "uint8"
    			}
    		],
    		name: "EventUpLevelEquip",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint8",
    				name: "quality",
    				type: "uint8"
    			}
    		],
    		name: "buyEquipBox",
    		outputs: [
    		],
    		stateMutability: "payable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "decomposeEquip",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "equip721_",
    		outputs: [
    			{
    				internalType: "contract IEquip721",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "equip_box_price1_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "equip_box_price2_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "equip_box_price3_",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero1155_",
    		outputs: [
    			{
    				internalType: "contract IHero1155",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "levelUpEquip",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "max_equip_level_",
    		outputs: [
    			{
    				internalType: "uint32",
    				name: "",
    				type: "uint32"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "equip721",
    				type: "address"
    			}
    		],
    		name: "setEquip721",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint8",
    				name: "quality",
    				type: "uint8"
    			},
    			{
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "setEquipBoxQualityPrice",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "hero1155",
    				type: "address"
    			}
    		],
    		name: "setHero1155",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint32",
    				name: "max_level",
    				type: "uint32"
    			}
    		],
    		name: "setMaxEquipLevel",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "withdraw",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	}
    ];

    class EquipLogic extends Base {
      constructor(provider) {
        super(provider, EquipLogicABI, 'EquipLogic');
      }
      /**
       * @dev 查询盲盒的卖价
       * @return 3个品质对应的价格，顺序低中高
       */


      async getEquipBoxPrice() {
        try {
          let p1 = await this.contract.methods.equip_box_price1_().call();
          let p2 = await this.contract.methods.equip_box_price2_().call();
          let p3 = await this.contract.methods.equip_box_price3_().call();
          return [Web3.utils.fromWei(p1, 'ether'), Web3.utils.fromWei(p2, 'ether'), Web3.utils.fromWei(p3, 'ether')];
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 购买装备
       * @param {quality 品质(1,2,3),1最差品质,3最好品质}
       */


      async buyEquipBox(quality) {
        try {
          let price;

          if (quality == 1) {
            price = await this.contract.methods.equip_box_price1_().call();
          } else if (quality == 2) {
            price = await this.contract.methods.equip_box_price2_().call();
          } else if (quality == 3) {
            price = await this.contract.methods.equip_box_price3_().call();
          } else {
            return Promise.reject('buyEquipBox error quality!');
          }

          return await this.contract.methods.buyEquipBox(quality).send({
            from: this.provider.getAccount(),
            value: price,
            gas: GAS
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 装备升级(普通材料和相同品质的材料数量需要满足)
       * @param {token_id 待升级的装备}
       */


      async levelUpEquip(token_id) {
        return await this.contract.methods.levelUpEquip(token_id).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 装备分解
       * 
       * @param {token_id 待升级的装备}
       */


      async decomposeEquip(token_id) {
        return await this.contract.methods.decomposeEquip(token_id).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 管理员接口，查询英雄合约当前的收益
       */


      async getBalance() {
        try {
          let amount = await this.provider.web3.eth.getBalance(this.address);
          return Web3.utils.fromWei(amount, 'ether');
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 管理员接口，只有合约拥有者才能调用，提币(卖盲盒的收益)
       */


      async withdraw() {
        return await this.contract.methods.withdraw().send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 管理员接口，只有合约拥有者才能调用，设置装备盲盒的价格
       * @param {quality 品质(1,2,3),1最差品质,3最好品质}
       * @param {price 价格(币安币)}
       */


      async setEquipBoxQualityPrice(quality, price) {
        let wei_amount = new this.provider.web3.utils.BN(Web3.utils.toWei(String(price), 'ether'));
        return await this.contract.methods.setEquipBoxQualityPrice(quality, wei_amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }

      decodeEventBuyEquip(receipt) {
        let kv = {
          buyer: receipt.events.EventBuyEquip.returnValues.buyer,
          price: receipt.events.EventBuyEquip.returnValues.price,
          meta: receipt.events.EventBuyEquip.returnValues.meta
        };
        return kv;
      }

      decodeEventUpLevelEquip(receipt) {
        let kv = {
          tokenid: receipt.events.EventUpLevelEquip.returnValues.tokenid,
          owner: receipt.events.EventUpLevelEquip.returnValues.owner,
          oldLevel: receipt.events.EventUpLevelEquip.returnValues.oldLevel,
          curLevel: receipt.events.EventUpLevelEquip.returnValues.curLevel
        };
        return kv;
      }

      decodeEventDecompseEquip(receipt) {
        let kv = {
          tokenid: receipt.events.EventDecompseEquip.returnValues.tokenid,
          owner: receipt.events.EventDecompseEquip.returnValues.owner,
          ids: receipt.events.EventDecompseEquip.returnValues.ids,
          amounts: receipt.events.EventDecompseEquip.returnValues.amounts
        };
        return kv;
      }

    }

    var Equip721ABI = [
    	{
    		inputs: [
    			{
    				internalType: "string",
    				name: "name",
    				type: "string"
    			},
    			{
    				internalType: "string",
    				name: "symbol",
    				type: "string"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "constructor"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "approved",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "Approval",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "bool",
    				name: "approved",
    				type: "bool"
    			}
    		],
    		name: "ApprovalForAll",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenid",
    				type: "uint256"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				components: [
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_equip",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "level",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "pos",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type3",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type4",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type5",
    						type: "uint8"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value1",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value2",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value3",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value4",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value5",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "base_attr",
    						type: "uint16"
    					}
    				],
    				indexed: false,
    				internalType: "struct EquipMetaData",
    				name: "meta",
    				type: "tuple"
    			}
    		],
    		name: "EventNewEquip",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "Transfer",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "approve",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			}
    		],
    		name: "balanceOf",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "burn",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				components: [
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_equip",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "level",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "pos",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type3",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type4",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type5",
    						type: "uint8"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value1",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value2",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value3",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value4",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value5",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "base_attr",
    						type: "uint16"
    					}
    				],
    				internalType: "struct EquipMetaData",
    				name: "meta",
    				type: "tuple"
    			}
    		],
    		name: "createMetaTo",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "exists",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "getApproved",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "getMeta",
    		outputs: [
    			{
    				components: [
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_equip",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "level",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "pos",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type3",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type4",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type5",
    						type: "uint8"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value1",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value2",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value3",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value4",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value5",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "base_attr",
    						type: "uint16"
    					}
    				],
    				internalType: "struct EquipMetaData",
    				name: "",
    				type: "tuple"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			}
    		],
    		name: "getMetas",
    		outputs: [
    			{
    				internalType: "uint256[]",
    				name: "",
    				type: "uint256[]"
    			},
    			{
    				components: [
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_equip",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "level",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "pos",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type3",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type4",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type5",
    						type: "uint8"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value1",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value2",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value3",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value4",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value5",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "base_attr",
    						type: "uint16"
    					}
    				],
    				internalType: "struct EquipMetaData[]",
    				name: "",
    				type: "tuple[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			}
    		],
    		name: "getTokens",
    		outputs: [
    			{
    				internalType: "uint256[]",
    				name: "",
    				type: "uint256[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			}
    		],
    		name: "isApprovedForAll",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "logic_contract_",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "market_contract_",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "name",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "ownerOf",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "safeTransferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			},
    			{
    				internalType: "bytes",
    				name: "_data",
    				type: "bytes"
    			}
    		],
    		name: "safeTransferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				internalType: "bool",
    				name: "approved",
    				type: "bool"
    			}
    		],
    		name: "setApprovalForAll",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "string",
    				name: "base_token_uri",
    				type: "string"
    			}
    		],
    		name: "setBaseTokenURI",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "logic_contract",
    				type: "address"
    			}
    		],
    		name: "setLogicContract",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "market_contract",
    				type: "address"
    			}
    		],
    		name: "setMarketContract",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				components: [
    					{
    						internalType: "uint8",
    						name: "quality_box",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "quality_equip",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "level",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "job",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "pos",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type1",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type2",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type3",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type4",
    						type: "uint8"
    					},
    					{
    						internalType: "uint8",
    						name: "attr_type5",
    						type: "uint8"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value1",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value2",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value3",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value4",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "attr_value5",
    						type: "uint16"
    					},
    					{
    						internalType: "uint16",
    						name: "base_attr",
    						type: "uint16"
    					}
    				],
    				internalType: "struct EquipMetaData",
    				name: "meta",
    				type: "tuple"
    			}
    		],
    		name: "setMeta",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "bytes4",
    				name: "interfaceId",
    				type: "bytes4"
    			}
    		],
    		name: "supportsInterface",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "symbol",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "index",
    				type: "uint256"
    			}
    		],
    		name: "tokenByIndex",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "index",
    				type: "uint256"
    			}
    		],
    		name: "tokenOfOwnerByIndex",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "tokenURI",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "totalSupply",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "tokenId",
    				type: "uint256"
    			}
    		],
    		name: "transferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	}
    ];

    class Equip721 extends Base {
      constructor(provider) {
        super(provider, Equip721ABI, 'Equip721');
      }
      /**
       * @dev 根据 token id, 查询用户 token 的数量
       * @param account string 账户地址
       * @return 币的数量
       */


      async balanceOf(account) {
        return await this.contract.methods.balanceOf(account).call();
      }
      /**
       * @dev 查询账户下所有的token
       * @param {account 账户地址}
       * @return tokenid数组
       */


      async getTokens(account) {
        return await this.contract.methods.getTokens(account).call();
      }
      /**
       * @dev 查询账户下所有的元数据
       * @param {account 账户地址}
       * @return tokenid数组,EquipMetaData
       */


      async getMetas(account) {
        return await this.contract.methods.getMetas(account).call();
      }
      /**
       * @dev 查询单个token元数据
       * @param {token_id nft id}
       * @return EquipMetaData
       */


      async getMeta(token_id) {
        return await this.contract.methods.getMeta(token_id).call();
      }
      /**
       * @dev 授权市场操作
       * @param {operator 授权地址}
       * @param {approved 权限}
       */


      async setApprovalForAll(operator, approved) {
        return await this.contract.methods.setApprovalForAll(operator, approved).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 授权市场操作
       * @param {operator 授权地址}
       * @return bool
       */


      async isApprovedForAll(operator) {
        return await this.contract.methods.isApprovedForAll(this.provider.getAccount(), operator).call();
      }

    }

    var Hero1155ABI = [
    	{
    		inputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "constructor"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "account",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "bool",
    				name: "approved",
    				type: "bool"
    			}
    		],
    		name: "ApprovalForAll",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256[]",
    				name: "ids",
    				type: "uint256[]"
    			},
    			{
    				indexed: false,
    				internalType: "uint256[]",
    				name: "values",
    				type: "uint256[]"
    			}
    		],
    		name: "TransferBatch",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "id",
    				type: "uint256"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "value",
    				type: "uint256"
    			}
    		],
    		name: "TransferSingle",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: false,
    				internalType: "string",
    				name: "value",
    				type: "string"
    			},
    			{
    				indexed: true,
    				internalType: "uint256",
    				name: "id",
    				type: "uint256"
    			}
    		],
    		name: "URI",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "id",
    				type: "uint256"
    			}
    		],
    		name: "balanceOf",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address[]",
    				name: "accounts",
    				type: "address[]"
    			},
    			{
    				internalType: "uint256[]",
    				name: "ids",
    				type: "uint256[]"
    			}
    		],
    		name: "balanceOfBatch",
    		outputs: [
    			{
    				internalType: "uint256[]",
    				name: "",
    				type: "uint256[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "value",
    				type: "uint256"
    			}
    		],
    		name: "burn",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			},
    			{
    				internalType: "uint256[]",
    				name: "ids",
    				type: "uint256[]"
    			},
    			{
    				internalType: "uint256[]",
    				name: "values",
    				type: "uint256[]"
    			}
    		],
    		name: "burnBatch",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "equip_logic_contract_",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "hero_logic_contract_",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			}
    		],
    		name: "isApprovedForAll",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "amount",
    				type: "uint256"
    			}
    		],
    		name: "mintTo",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256[]",
    				name: "ids",
    				type: "uint256[]"
    			},
    			{
    				internalType: "uint256[]",
    				name: "amounts",
    				type: "uint256[]"
    			}
    		],
    		name: "mintToBatch",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256[]",
    				name: "ids",
    				type: "uint256[]"
    			},
    			{
    				internalType: "uint256[]",
    				name: "amounts",
    				type: "uint256[]"
    			},
    			{
    				internalType: "bytes",
    				name: "data",
    				type: "bytes"
    			}
    		],
    		name: "safeBatchTransferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "amount",
    				type: "uint256"
    			},
    			{
    				internalType: "bytes",
    				name: "data",
    				type: "bytes"
    			}
    		],
    		name: "safeTransferFrom",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "operator",
    				type: "address"
    			},
    			{
    				internalType: "bool",
    				name: "approved",
    				type: "bool"
    			}
    		],
    		name: "setApprovalForAll",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "logic_contract",
    				type: "address"
    			}
    		],
    		name: "setEquipLogicContract",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "logic_contract",
    				type: "address"
    			}
    		],
    		name: "setHeroLogicContract",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "bytes4",
    				name: "interfaceId",
    				type: "bytes4"
    			}
    		],
    		name: "supportsInterface",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		name: "uri",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	}
    ];

    class Hero1155 extends Base {
      constructor(provider) {
        super(provider, Hero1155ABI, 'Hero1155');
      }
      /**
       * @dev 根据 token id, 查询用户 token 的数量
       * @param account string 账户地址
       * @param id number ERC1155 token 唯一标识符
       */


      async balanceOf(account, id) {
        return await this.contract.methods.balanceOf(account, id).call();
      }
      /**
       * @dev 批量查询用户 token 的数量
       * @notice 要求 accounts ids 数组长度一致
       * @param accounts [string] 账户地址数组
       * @param ids [number] ERC1155 token 唯一标识符
       */


      async balanceOfBatch(accounts, ids) {
        return await this.contract.methods.balanceOfBatch(accounts, ids).call();
      }
      /**
       * @dev 查询操作者地址是否拥有指定账户所有 token 的转移权限
       * @param account string token 拥有者账户地址
       * @param operator string 操作者账户地址
       */


      async isApprovedForAll(account, operator) {
        return await this.contract.methods.isApprovedForAll(account, operator).call();
      }
      /**
       * @dev 设置调用者所拥有的 token 的转移权限
       * @param operator string 操作者账户地址
       * @param approved bool  批准状态 [true: 批准, false: 未批准]
       */


      async setApprovalForAll(operator, approved) {
        return await this.contract.methods.setApprovalForAll(operator, approved).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 从转出账户地址转移指定数量的 token 至接收账户地址
       * @notice 要求调用者拥有转出账户的批准，或者调用者为转出账户
       * @param from string 转出账户地址
       * @param to string 接受账户地址
       * @param id number token id
       * @param amount number 转移数量
       */


      async safeTransferFrom(from, to, id, amount) {
        return await this.contract.methods.safeTransferFrom(from, to, id, amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 批量从转出账户地址转移不同数量的不同 token 至接收账户地址
       * @notice 要求调用者拥有转出账户的批准，或者调用者为转出账户
       * @param from string 转出账户地址
       * @param to string 接受账户地址
       * @param ids [number] token id 数组
       * @param amounts [number] 转移数量数组
       */


      async safeBatchTransferFrom(from, to, ids, amounts) {
        return await this.contract.methods.safeBatchTransferFrom(from, to, ids, amounts).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }

    }

    var Hero20ABI = [
    	{
    		inputs: [
    			{
    				internalType: "string",
    				name: "name_",
    				type: "string"
    			},
    			{
    				internalType: "string",
    				name: "symbol_",
    				type: "string"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "constructor"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "spender",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "value",
    				type: "uint256"
    			}
    		],
    		name: "Approval",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "value",
    				type: "uint256"
    			}
    		],
    		name: "Transfer",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "owner",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "spender",
    				type: "address"
    			}
    		],
    		name: "allowance",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "spender",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "amount",
    				type: "uint256"
    			}
    		],
    		name: "approve",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			}
    		],
    		name: "balanceOf",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "decimals",
    		outputs: [
    			{
    				internalType: "uint8",
    				name: "",
    				type: "uint8"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "spender",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "subtractedValue",
    				type: "uint256"
    			}
    		],
    		name: "decreaseAllowance",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "spender",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "addedValue",
    				type: "uint256"
    			}
    		],
    		name: "increaseAllowance",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "amount",
    				type: "uint256"
    			}
    		],
    		name: "mint",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "amount",
    				type: "uint256"
    			}
    		],
    		name: "mintTo",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "name",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "symbol",
    		outputs: [
    			{
    				internalType: "string",
    				name: "",
    				type: "string"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "totalSupply",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "amount",
    				type: "uint256"
    			}
    		],
    		name: "transfer",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "from",
    				type: "address"
    			},
    			{
    				internalType: "address",
    				name: "to",
    				type: "address"
    			},
    			{
    				internalType: "uint256",
    				name: "amount",
    				type: "uint256"
    			}
    		],
    		name: "transferFrom",
    		outputs: [
    			{
    				internalType: "bool",
    				name: "",
    				type: "bool"
    			}
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	}
    ];

    class Hero20 extends Base {
      constructor(provider) {
        super(provider, Hero20ABI, 'Hero20');
      }
      /**
       * @dev 根据 token id, 查询用户 token 的数量
       * @param account string 账户地址
       * @return 币的数量
       */


      async balanceOf(account) {
        try {
          let amount = await this.contract.methods.balanceOf(account).call();
          return Web3.utils.fromWei(amount, 'ether');
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 管理员用户调用，给玩家提币
       * @param account string 账户地址
       * @param amount 数量
       */


      async mintTo(account, amount) {
        let wei_amount = new this.provider.web3.utils.BN(Web3.utils.toWei(String(amount), 'ether'));
        return await this.contract.methods.mintTo(account, wei_amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }

    }

    var HeroMarketABI = [
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "seller",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "buyer",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "EventBuy",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "buy",
    		outputs: [
    		],
    		stateMutability: "payable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "change",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "del",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "delHeroCallback",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "getItemPrice",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "index",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "num",
    				type: "uint256"
    			}
    		],
    		name: "getItems",
    		outputs: [
    			{
    				components: [
    					{
    						internalType: "address",
    						name: "seller",
    						type: "address"
    					},
    					{
    						internalType: "uint256",
    						name: "token_id",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "price",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "publish_time",
    						type: "uint256"
    					}
    				],
    				internalType: "struct MarketItem[]",
    				name: "",
    				type: "tuple[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			}
    		],
    		name: "getMyItems",
    		outputs: [
    			{
    				components: [
    					{
    						internalType: "address",
    						name: "seller",
    						type: "address"
    					},
    					{
    						internalType: "uint256",
    						name: "token_id",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "price",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "publish_time",
    						type: "uint256"
    					}
    				],
    				internalType: "struct MarketItem[]",
    				name: "",
    				type: "tuple[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "put",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "erc721",
    				type: "address"
    			}
    		],
    		name: "setERC721",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "withdraw",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	}
    ];

    class HeroMarket extends Base {
      constructor(provider) {
        super(provider, HeroMarketABI, 'HeroMarket');
      }
      /**
       * @dev 发布商品
       * @param {token_id 英雄token}
       * @param {price 售价}
       */


      async put(token_id, price) {
        let wei_amount = new this.provider.web3.utils.BN(Web3.utils.toWei(String(price), 'ether'));
        return await this.contract.methods.put(token_id, wei_amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 删除商品
       * @param {token_id 英雄token}
       */


      async del(token_id) {
        return await this.contract.methods.del(token_id).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 改价商品
       * @param {token_id 英雄token}
       * @param {price 新售价}
       */


      async change(token_id, price) {
        let wei_amount = new this.provider.web3.utils.BN(Web3.utils.toWei(String(price), 'ether'));
        return await this.contract.methods.change(token_id, wei_amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 购买商品
       * @param {token_id 英雄token}
       */


      async buy(token_id) {
        try {
          let price = await this.contract.methods.getItemPrice(token_id).call();
          return await this.contract.methods.buy(token_id).send({
            from: this.provider.getAccount(),
            value: price,
            gas: GAS
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 获取商品列表
       * @param {index 索引从0开始}
       * @param {num 数量}
       */


      async getItems(index, num) {
        return await this.contract.methods.getItems(index, num).call();
      }
      /**
       * @dev 获取商品列表
       * @param {index 索引从0开始}
       * @param {num 数量}
       */


      async getMyItems() {
        return await this.contract.methods.getMyItems(this.provider.getAccount()).call();
      }
      /**
       * @dev 管理员接口，只有合约拥有者才能调用，提币(卖盲盒的收益)
       */


      async withdraw() {
        return await this.contract.methods.withdraw().send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }

    }

    var EquipMarketABI = [
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "seller",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "buyer",
    				type: "address"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				indexed: false,
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "EventBuy",
    		type: "event"
    	},
    	{
    		anonymous: false,
    		inputs: [
    			{
    				indexed: true,
    				internalType: "address",
    				name: "previousOwner",
    				type: "address"
    			},
    			{
    				indexed: true,
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "OwnershipTransferred",
    		type: "event"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "buy",
    		outputs: [
    		],
    		stateMutability: "payable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "change",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "del",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "delEquipCallback",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			}
    		],
    		name: "getItemPrice",
    		outputs: [
    			{
    				internalType: "uint256",
    				name: "",
    				type: "uint256"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "index",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "num",
    				type: "uint256"
    			}
    		],
    		name: "getItems",
    		outputs: [
    			{
    				components: [
    					{
    						internalType: "address",
    						name: "seller",
    						type: "address"
    					},
    					{
    						internalType: "uint256",
    						name: "token_id",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "price",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "publish_time",
    						type: "uint256"
    					}
    				],
    				internalType: "struct MarketItem[]",
    				name: "",
    				type: "tuple[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "account",
    				type: "address"
    			}
    		],
    		name: "getMyItems",
    		outputs: [
    			{
    				components: [
    					{
    						internalType: "address",
    						name: "seller",
    						type: "address"
    					},
    					{
    						internalType: "uint256",
    						name: "token_id",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "price",
    						type: "uint256"
    					},
    					{
    						internalType: "uint256",
    						name: "publish_time",
    						type: "uint256"
    					}
    				],
    				internalType: "struct MarketItem[]",
    				name: "",
    				type: "tuple[]"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "kill",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "owner",
    		outputs: [
    			{
    				internalType: "address",
    				name: "",
    				type: "address"
    			}
    		],
    		stateMutability: "view",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "uint256",
    				name: "token_id",
    				type: "uint256"
    			},
    			{
    				internalType: "uint256",
    				name: "price",
    				type: "uint256"
    			}
    		],
    		name: "put",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "renounceOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "erc721",
    				type: "address"
    			}
    		],
    		name: "setERC721",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    			{
    				internalType: "address",
    				name: "newOwner",
    				type: "address"
    			}
    		],
    		name: "transferOwnership",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	},
    	{
    		inputs: [
    		],
    		name: "withdraw",
    		outputs: [
    		],
    		stateMutability: "nonpayable",
    		type: "function"
    	}
    ];

    class EquipMarket extends Base {
      constructor(provider) {
        super(provider, EquipMarketABI, 'EquipMarket');
      }
      /**
       * @dev 发布商品
       * @param {token_id 英雄token}
       * @param {price 售价}
       */


      async put(token_id, price) {
        let wei_amount = new this.provider.web3.utils.BN(Web3.utils.toWei(String(price), 'ether'));
        return await this.contract.methods.put(token_id, wei_amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 删除商品
       * @param {token_id 英雄token}
       */


      async del(token_id) {
        return await this.contract.methods.del(token_id).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 改价商品
       * @param {token_id 英雄token}
       * @param {price 新售价}
       */


      async change(token_id, price) {
        let wei_amount = new this.provider.web3.utils.BN(Web3.utils.toWei(String(price), 'ether'));
        return await this.contract.methods.change(token_id, wei_amount).send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }
      /**
       * @dev 购买商品
       * @param {token_id 英雄token}
       */


      async buy(token_id) {
        try {
          let price = await this.contract.methods.getItemPrice(token_id).call();
          return await this.contract.methods.buy(token_id).send({
            from: this.provider.getAccount(),
            value: price,
            gas: GAS
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
      /**
       * @dev 获取商品列表
       * @param {index 索引从0开始}
       * @param {num 数量}
       */


      async getItems(index, num) {
        return await this.contract.methods.getItems(index, num).call();
      }
      /**
       * @dev 获取商品列表
       * @param {index 索引从0开始}
       * @param {num 数量}
       */


      async getMyItems() {
        return await this.contract.methods.getMyItems(this.provider.getAccount()).call();
      }
      /**
       * @dev 管理员接口，只有合约拥有者才能调用，提币(卖盲盒的收益)
       */


      async withdraw() {
        return await this.contract.methods.withdraw().send({
          from: this.provider.getAccount(),
          gas: GAS
        });
      }

    }

    class ChainMain {
      constructor(chainWeb3) {
        this.chainWeb3 = chainWeb3;
        this.HeroLogic = new HeroLogic(this.chainWeb3);
        this.Hero721 = new Hero721(this.chainWeb3);
        this.EquipLogic = new EquipLogic(this.chainWeb3);
        this.Equip721 = new Equip721(this.chainWeb3);
        this.Hero1155 = new Hero1155(this.chainWeb3);
        this.Hero20 = new Hero20(this.chainWeb3);
        this.HeroMarket = new HeroMarket(this.chainWeb3);
        this.EquipMarket = new EquipMarket(this.chainWeb3);
      }

    }

    var chainApi = new ChainMain(chainWeb3$1);

    return chainApi;

})));
