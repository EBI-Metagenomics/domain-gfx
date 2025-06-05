// @flow
export default (data /*: Object */) => {
  // flatten data, metadata overwrites duplicated
  const _data = { ...data, ...(data.metadata || {}) };
  // shortcuts and preprocess
  const mainTitle = _data.identifier || _data.type || _data.accession || '';
  const subTitle = _data.accession || '';
  const description = _data.description;
  const source = _data.database || _data.source;
  const position = _data.start;
  const targetStart = _data.targetStart || _data.tStart || _data.tstart;
  const targetEnd = _data.targetEnd || _data.tEnd || _data.tend;
  const queryStart = _data.queryStart || _data.qStart || _data.qstart;
  const queryEnd = _data.queryEnd || _data.qEnd || _data.qend;

  let coordinates;

  if (_data.start && _data.end) {
    coordinates = `${_data.start} - ${_data.end}`;

    if (_data.aliStart && _data.aliEnd) {
      coordinates += ` (alignment region ${_data.aliStart} - ${_data.aliEnd})`;
    }
  }

  let modelMatch;

  if (_data.modelStart) {
    let offset = 0;

    if (_data.modelStart > 1) {
      offset = (100 * (_data.modelStart - 1)) / _data.modelLength;
    }

    modelMatch = `
      1<span style="width: 100px;" class="domain">
        <span class="alignment" style="
          width: ${
            (100 * (_data.modelEnd - _data.modelStart + 1)) / _data.modelLength
          }px;
          margin-left: ${offset}px;
          background-color: ${_data.color};
        "></span>
      </span>${_data.end}
    `;
  }

  // render to string
  return `
    <table>
      <thead>
        <tr>
          <th colspan="2">
            ${mainTitle || (targetStart && 'Match coordinates')}
            ${subTitle && subTitle !== mainTitle ? ` (${subTitle})` : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        ${
          description
            ? `
        <tr>
          <td>Description:</td>
          <td>${description}</td>
        </tr>
        `
            : ''
        }
        ${
          coordinates
            ? `
        <tr>
          <td>Coordinates:</td>
          <td>${coordinates}</td>
        </tr>
        `
            : ''
        }
        ${
          modelMatch
            ? `
        <tr>
          <td>Model Match:</td>
          <td class="coordinates">${modelMatch}</td>
        </tr>
        `
            : ''
        }
        ${
          !coordinates && position
            ? `
        <tr>
          <td>Position:</td>
          <td>${position}</td>
        </tr>
        `
            : ''
        }
        ${
          source
            ? `
        <tr>
          <td>Source:</td>
          <td>${source}</td>
        </tr>
        `
            : ''
        }
        ${
          targetStart
            ? `
        <tr>
          <td>Target:</td>
          <td>${targetStart}${targetEnd ? ` - ${targetEnd}` : ''}</td>
        </tr>
        `
            : ''
        }
        ${
          queryStart
            ? `
        <tr>
          <td>Query:</td>
          <td>${queryStart}${queryEnd ? ` - ${queryEnd}` : ''}</td>
        </tr>
        `
            : ''
        }
      </tbody>
    </table>
  `;
};
