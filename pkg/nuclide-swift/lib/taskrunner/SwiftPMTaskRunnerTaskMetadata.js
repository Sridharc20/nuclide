/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

import type {TaskMetadata} from '../../../nuclide-task-runner/lib/types';

export const SwiftPMTaskRunnerBuildTaskMetadata: TaskMetadata = {
  type: 'build',
  label: 'Build',
  description: 'Build a Swift package',
  runnable: true,
  icon: 'tools',
};

export const SwiftPMTaskRunnerTestTaskMetadata: TaskMetadata = {
  type: 'test',
  label: 'Test',
  description: 'Run a Swift package\'s tests',
  runnable: true,
  icon: 'checklist',
};

export const SwiftPMTaskRunnerTaskMetadata: Array<TaskMetadata> = [
  SwiftPMTaskRunnerBuildTaskMetadata,
  SwiftPMTaskRunnerTestTaskMetadata,
];
