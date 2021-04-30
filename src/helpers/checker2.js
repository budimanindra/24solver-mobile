const TWENTY_FOUR = 24;

function checker(allProbability, allResult) {
    for (let index = 0; index < allProbability.length; index++) {
        if (allProbability[index][0] + allProbability[index][1] + allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} + ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] + allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} + ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] + allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} + ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] + allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} + ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] - allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} - ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] - allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} - ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] - allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} - ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] - allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} - ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] * allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} * ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] * allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} * ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] * allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} * ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] * allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} * ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] / allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} / ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] / allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} / ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] / allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} / ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] + allProbability[index][1] / allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} + ${allProbability[index][1]} / ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] + allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} + ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] + allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} + ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] + allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} + ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] + allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} + ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] - allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} - ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] - allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} - ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] - allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} - ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] - allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} - ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] * allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} * ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] * allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} * ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] * allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} * ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] * allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} * ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] / allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} / ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] / allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} / ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] / allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} / ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] - allProbability[index][1] / allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} - ${allProbability[index][1]} / ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] + allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} + ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] + allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} + ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] + allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} + ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] + allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} + ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] - allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} - ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] - allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} - ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] - allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} - ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] - allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} - ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] * allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} * ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] * allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} * ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] * allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} * ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] * allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} * ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] / allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} / ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] / allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} / ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] / allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} / ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] * allProbability[index][1] / allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} * ${allProbability[index][1]} / ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] + allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} + ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] + allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} + ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] + allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} + ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] + allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} + ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] - allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} - ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] - allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} - ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] - allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} - ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] - allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} - ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] * allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} * ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] * allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} * ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] * allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} * ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] * allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} * ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] / allProbability[index][2] + allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} / ${allProbability[index][2]} + ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] / allProbability[index][2] - allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} / ${allProbability[index][2]} - ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] / allProbability[index][2] * allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} / ${allProbability[index][2]} * ${allProbability[index][3]} = 24`)
        }

        if (allProbability[index][0] / allProbability[index][1] / allProbability[index][2] / allProbability[index][3] == TWENTY_FOUR) {
            allResult.push(`${allProbability[index][0]} / ${allProbability[index][1]} / ${allProbability[index][2]} / ${allProbability[index][3]} = 24`)
        }
    }
}

function permute(permutation) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}
function solver24(combination) {
    let allProbability = permute(combination);
    let allResult = [];

    checker(allProbability, allResult)
    let finalArray = [...new Set(allResult)];
    return finalArray;
    // if (finalArray.length == 0) {
    //     return(`tidak ada solusi untuk kombinasi angka tersebut`)
    // } else {
    //     return(`total ada ${finalArray.length} solusi`)
    // }
    // finalArray.forEach((result, index) => {
    //     return(`solusi ${index + 1} untuk penyelesaian game adalah ${result}`)
    // })
}

export default solver24;
