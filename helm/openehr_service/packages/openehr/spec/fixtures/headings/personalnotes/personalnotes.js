/*

 ----------------------------------------------------------------------------
 | ripple-cdr-openehr: Ripple MicroServices for OpenEHR                     |
 |                                                                          |
 | Copyright (c) 2018-19 Ripple Foundation Community Interest Company       |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  25 January 2019

*/

'use strict';

module.exports = {
  name: 'personalnotes',
  textFieldName: 'noteType',
  headingTableFields: ['noteType', 'author', 'dateCreated'],

  get: {

    transformTemplate: {
      noteType:    '{{type}}',
      notes:       '{{personal_note}}',
      author:      '{{author}}',
      dateCreated: '=> getRippleTime(date_created)',
      source:      '=> getSource()',
      sourceId:    '=> getUid(uid)'
    }

  },

  post: {
    templateId: 'RIPPLE - Personal Notes.v1',

    transformTemplate: {
      ctx: {
        composer_name:               '=> either(author, "Dr Tony Shannon")',
        'health_care_facility|id':   '=> either(healthcareFacilityId, "999999-345")',
        'health_care_facility|name': '=> either(healthcareFacilityName, "Rippleburgh GP Practice")',
        id_namespace:                'NHS-UK',
        id_scheme:                   '2.16.840.1.113883.2.1.4.3',
        language:                    'en',
        territory:                   'GB',
        time:                        '=> now()'
      },
      personal_notes: {
        clinical_synopsis: [
          {
            '_name|value': '=> either(noteType, "undefined")',
            notes:         '=> either(notes, "undefined")',
          }
        ]
      }
    }
  }
};
