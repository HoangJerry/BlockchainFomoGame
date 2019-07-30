import * from 'setting';

const mainnet = 1;
const ropstain = 3;
const networkConst;

if (developing==true){
	networkConst = ropstain;
}
else {
	networkConst = mainnet;
}

export * from ...;