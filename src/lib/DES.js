//string to array
function stringToArray(string) {
  let array = new Array(string.length);
  for (let i = 0; i < string.length; i++) {
    array[i] = string.charAt(i);
  }
  return array;
}

//array to string
function ArrayToString(array) {
  let string = array.join("");
  return string;
}

//array內容轉ascii 2進制
function arrayToASCII(array) {
  let ASCII = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    ASCII[i] = 0 + "" + array[i].charCodeAt(0).toString(2);
  }
  return ASCII;
}

//2進制array轉10進制array
function binToDec(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i], 2);
  }
  return array;
}

//2進制轉ascii array
function binToASCII(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = String.fromCharCode(parseInt(array[i], 2));
  }
  return array;
}

//array半開左右兩半，取前半部份
function getLArray(array) {
  let x = array.length / 2;
  let LArray = new Array(x);
  for (let i = 0; i < x; i++) {
    LArray[i] = array[i];
  }
  let Rarray = new Array(x);
  for (let i = x; i < x * 2; i++) {
    Rarray[i - x] = array[i];
  }
  return LArray;
}

//array半開左右兩半，取後半部份
function getRArray(array) {
  let x = array.length / 2;
  let LArray = new Array(x);
  for (let i = 0; i < x; i++) {
    LArray[i] = array[i];
  }
  let Rarray = new Array(x);
  for (let i = x; i < x * 2; i++) {
    Rarray[i - x] = array[i];
  }
  return Rarray;
}

var PC1 = [
  58, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35,
  27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38,
  30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
];
var keyShiftList = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
var PC2 = [
  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27,
  20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34,
  53, 46, 42, 50, 36, 29, 32,
];
var initialIP = [
  58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38,
  30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1,
  59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39,
  31, 23, 15, 7,
];
var EBox = [
  32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16,
  17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29,
  28, 29, 30, 31, 32, 1,
];
var SBox = [
  [
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
    [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
    [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
    [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13],
  ],
  [
    [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
    [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
    [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
    [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9],
  ],
  [
    [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
    [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
    [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
    [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12],
  ],
  [
    [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
    [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
    [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
    [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14],
  ],
  [
    [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
    [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
    [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
    [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3],
  ],
  [
    [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
    [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
    [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
    [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13],
  ],
  [
    [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
    [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
    [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
    [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12],
  ],
  [
    [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
    [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
    [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
    [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11],
  ],
];
var PBox = [
  16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32,
  27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25,
];
var finalIP = [
  40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14,
  54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 2, 60, 28,
  35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9,
  49, 17, 57, 25,
];

function createKey(key) {
  let keyList = arrayToASCII(key);
  for (let i = 0; i < 8; i++) {
    while (keyList[i].length != 8) {
      keyList[i] = "0" + keyList[i];
    }
  }
  keyList = ArrayToString(keyList);
  keyList = stringToArray(keyList);
  //PC1置換
  let PC1change = new Array(56);
  for (let i = 0; i < PC1.length; i++) {
    PC1change[i] = keyList[PC1[i] - 1];
  }
  let LKey = getLArray(PC1change);
  let RKey = getRArray(PC1change);
  //PC2 16次置換
  let subKey = new Array();
  for (let i = 0; i < keyShiftList.length; i++) {
    let LKeyTemp = new Array(28);
    let RKeyTemp = new Array(28);
    if (keyShiftList[i] === 1) {
      LKeyTemp[27] = LKey[0];
      RKeyTemp[27] = RKey[0];
      for (let j = 0; j < 27; j++) {
        LKeyTemp[j] = LKey[j + 1];
        RKeyTemp[j] = RKey[j + 1];
      }
    } else if (keyShiftList[i] === 2) {
      LKeyTemp[26] = LKey[0];
      RKeyTemp[26] = RKey[0];
      LKeyTemp[27] = LKey[1];
      RKeyTemp[27] = RKey[1];
      for (let j = 0; j < 26; j++) {
        LKeyTemp[j] = LKey[j + 2];
        RKeyTemp[j] = RKey[j + 2];
      }
    } else {
      console.log("error");
    }
    LKey = LKeyTemp;
    RKey = RKeyTemp;
    let keyTemp = new Array();
    let PC2array = LKey.concat(RKey);
    for (let i = 0; i < PC2.length; i++) {
      keyTemp.push(PC2array[PC2[i] - 1]);
    }
    subKey.push(keyTemp);
  }
  return subKey;
}

export function encrypt(plaintext, key) {
  //get subKey
  let subKey = createKey(key);
  //明文轉成ASCII 2進制
  let plaintextList = arrayToASCII(stringToArray(plaintext));
  while (plaintextList.length < 8) {
    plaintextList.push("00000000");
  }
  for (let i = 0; i < 8; i++) {
    while (plaintextList[i].length != 8) {
      plaintextList[i] = "0" + plaintextList[i];
    }
  }
  plaintextList = stringToArray(ArrayToString(plaintextList));

  //初始置換
  let initialIPTemp = new Array();
  for (let i = 0; i < initialIP.length; i++) {
    initialIPTemp.push(plaintextList[initialIP[i] - 1]);
  }
  //初始置換後左移1個位
  for (let i = 0; i < initialIPTemp.length; i++) {
    plaintextList[63] = initialIPTemp[0];
    for (let j = 0; j < 62; j++) {
      plaintextList[j] = initialIPTemp[j + 1];
    }
  }
  //初始轉換後的明文分成左右
  let LText = getLArray(plaintextList);
  let RText = getRArray(plaintextList);

  //明文與key 16次迭代
  //EBOX 擴展
  for (let k = 0; k < 16; k++) {
    let LPart = RText;
    let RPart = new Array();
    for (let i = 0; i < EBox.length; i++) {
      RPart.push(RText[EBox[i] - 1]);
    }

    //将E(R0)（48位）与K1（48位）作XOR运算, subKey[i]
    for (let i = 0; i < RPart.length; i++) {
      RPart[i] = RPart[i] ^ subKey[k][i];
    }
    RPart = ArrayToString(RPart);
    let RPartArray = new Array();
    for (let i = 0; i < 8; i++) {
      let x = i * 6;
      RPartArray[i] = RPart.slice(0 + x, 6 + x);
    }

    //SBOX
    for (let i = 0; i < 8; i++) {
      let x = parseInt(RPartArray[i].charAt(0) + RPartArray[i].charAt(5), 2);
      let y = parseInt(RPartArray[i].slice(1, 5), 2);
      RPartArray[i] = SBox[i][x][y].toString(2);
      while (RPartArray[i].length != 4) {
        RPartArray[i] = "0" + RPartArray[i];
      }
    }
    //P Box
    RPartArray = stringToArray(ArrayToString(RPartArray));
    let RPartTempArray = new Array();
    for (let i = 0; i < PBox.length; i++) {
      RPartTempArray.push(RPartArray[PBox[i] - 1]);
    }

    //P box後右移一個位
    let RPartTempArray2 = new Array(RPartTempArray.length);
    for (let i = 0; i < RPartTempArray.length; i++) {
      RPartTempArray2[0] = RPartTempArray[31];
      for (let j = 1; j < 32; j++) {
        RPartTempArray2[j] = RPartTempArray[j - 1];
      }
    }
    RPartTempArray = RPartTempArray2;
    //與左明文XOR
    for (let i = 0; i < RPartTempArray.length; i++) {
      RPartTempArray[i] = RPartTempArray[i] ^ LText[i];
    }

    LText = LPart;
    RText = RPartTempArray;
  }

  plaintextList = LText.concat(RText);
  //final IP
  let finalmsg = new Array(64);
  for (let i = 0; i < finalIP.length; i++) {
    finalmsg[[finalIP[i] - 1]] = plaintextList[i];
  }
  let ciphertext = ArrayToString(finalmsg);
  return ciphertext;
}

//------------------------------------------------------------------------------------------------
export function decrypt(ciphertext, key) {
  //ciphertext be array and get subKey
  let subKey = createKey(key);
  let cipherList = stringToArray(ciphertext);

  let finalmsg = new Array(64);
  for (let i = 0; i < finalIP.length; i++) {
    finalmsg[i] = cipherList[[finalIP[i] - 1]];
  }
  //
  let LText = getLArray(finalmsg);
  let RText = getRArray(finalmsg);

  for (let k = 15; k > -1; k--) {
    let LPart = new Array();
    let RPart = LText;

    for (let i = 0; i < EBox.length; i++) {
      LPart.push(LText[EBox[i] - 1]);
    }

    for (let i = 0; i < LPart.length; i++) {
      LPart[i] = LPart[i] ^ subKey[k][i];
    }
    LPart = ArrayToString(LPart);
    let RPartArray = new Array();
    for (let i = 0; i < 8; i++) {
      let x = i * 6;
      RPartArray[i] = LPart.slice(0 + x, 6 + x);
    }

    for (let i = 0; i < 8; i++) {
      let x = parseInt(RPartArray[i].charAt(0) + RPartArray[i].charAt(5), 2);
      let y = parseInt(RPartArray[i].slice(1, 5), 2);
      RPartArray[i] = SBox[i][x][y].toString(2);
      while (RPartArray[i].length != 4) {
        RPartArray[i] = "0" + RPartArray[i];
      }
    }
    //P box後右移一個位
    RPartArray = stringToArray(ArrayToString(RPartArray));
    let RPartTempArray = new Array();
    for (let i = 0; i < PBox.length; i++) {
      RPartTempArray.push(RPartArray[PBox[i] - 1]);
    }
    let RPartTempArray2 = new Array(RPartTempArray.length);
    for (let i = 0; i < RPartTempArray.length; i++) {
      RPartTempArray2[0] = RPartTempArray[31];
      for (let j = 1; j < 32; j++) {
        RPartTempArray2[j] = RPartTempArray[j - 1];
      }
    }
    RPartTempArray = RPartTempArray2;
    //與左明文XOR
    for (let i = 0; i < RPartTempArray.length; i++) {
      RPartTempArray[i] = RPartTempArray[i] ^ RText[i];
    }
    LText = RPartTempArray;
    RText = RPart;
  }
  let plaintextList = LText.concat(RText);

  let initialIPTemp = new Array(plaintextList.length);
  //初始置換後左移1個位
  for (let i = 0; i < plaintextList.length; i++) {
    initialIPTemp[0] = plaintextList[63];
    for (let j = 1; j < 64; j++) {
      initialIPTemp[j] = plaintextList[j - 1];
    }
  }
  //初始置換
  for (let i = 0; i < initialIP.length; i++) {
    plaintextList[[initialIP[i] - 1]] = initialIPTemp[i];
  }

  let plaintext = new Array();
  for (let i = 0; i < 8; i++) {
    let x = i * 8;
    plaintext[i] = ArrayToString(plaintextList).slice(0 + x, 8 + x);
  }
  plaintext = ArrayToString(binToASCII(plaintext));

  return plaintext;
}

//crypto text=Plaintext or Ciphertext, key=key, acrion, 0=encrypt, 1= decrypt
function crypto(text, key, action) {
  if (action == 0 && key.length === 8) {
    let textList = new Array();
    let l = 0;
    while (text.length > l * 8) {
      let x = l * 8;
      textList.push(text.slice(0 + x, 8 + x));
      l = l + 1;
    }
    let newText = "";
    for (let i = 0; i < textList.length; i++) {
      newText = newText + encrypt(textList[i], key);
    }
    return newText;
  } else if (action == 1 && key.length === 8) {
    let textList = new Array();
    let l = 0;
    while (text.length > l * 64) {
      let x = l * 64;
      textList.push(text.slice(0 + x, 64 + x));
      l = l + 1;
    }
    let newText = "";
    for (let i = 0; i < textList.length; i++) {
      newText = newText + decrypt(textList[i], key);
    }
    return newText;
  } else {
    return "action, 0=encrypt, 1= decrypt and key must 8btye";
  }
}

let test = crypto("computer", "12345678", 0);
console.log("Ciphertext: ", test);
console.log("Plaintext: ", crypto(test, "12345678", 1));