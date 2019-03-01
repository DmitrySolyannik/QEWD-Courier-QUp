/*

 ----------------------------------------------------------------------------
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

  1 March 2019

*/

'use strict';

const CheckNhsNumberCommand = require('./checkNhsNumber');
const DeletePatientHeadingCommand = require('./deletePatientHeading');
const GetFeedDetailCommand = require('./getFeedDetail');
const GetFeedsSummaryCommand = require('./getFeedsSummary');
const GetHeadingSummaryFieldsCommand = require('./getHeadingSummaryFields');
const GetPatientHeadingDetailCommand = require('./getPatientHeadingDetail');
const GetPatientHeadingSummaryCommand = require('./getPatientHeadingSummary');
const GetPatientHeadingSynopsisCommand = require('./getPatientHeadingSynopsis');
const GetPatientSynopsisCommand = require('./getPatientSynopsis');
const GetPatientTop3ThingsDetailCommand = require('./getPatientTop3ThingsDetail');
const GetPatientTop3ThingsHscnDetailCommand = require('./getPatientTop3ThingsHscnDetail');
const GetPatientTop3ThingsSummaryCommand = require('./getPatientTop3ThingsSummary');
const MergeDiscoveryDataCommand = require('./mergeDiscoveryData');
const PostFeedCommand = require('./postFeed');
const PostPatientHeadingCommand = require('./postPatientHeading');
const PostPatientTop3ThingsCommand = require('./postPatientTop3Things');
const PutFeedCommand = require('./putFeed');
const PutPatientHeadingCommand = require('./putPatientHeading');
const RevertAllDiscoveryDataCommand = require('./revertAllDiscoveryData');
const RevertDiscoveryDataCommand = require('./revertDiscoveryData');

module.exports = {
  CheckNhsNumberCommand,
  DeletePatientHeadingCommand,
  GetFeedDetailCommand,
  GetFeedsSummaryCommand,
  GetHeadingSummaryFieldsCommand,
  GetPatientHeadingDetailCommand,
  GetPatientHeadingSummaryCommand,
  GetPatientHeadingSynopsisCommand,
  GetPatientSynopsisCommand,
  GetPatientTop3ThingsDetailCommand,
  GetPatientTop3ThingsHscnDetailCommand,
  GetPatientTop3ThingsSummaryCommand,
  MergeDiscoveryDataCommand,
  PostFeedCommand,
  PostPatientHeadingCommand,
  PostPatientTop3ThingsCommand,
  PutFeedCommand,
  PutPatientHeadingCommand,
  RevertAllDiscoveryDataCommand,
  RevertDiscoveryDataCommand
};
