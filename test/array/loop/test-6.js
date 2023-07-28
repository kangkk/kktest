// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-6');
for (let i in data) {}
console.timeEnd('array-6');
/**
<--- Last few GCs --->
0.[26241:0x7f9444300000]   113918 ms: Mark-sweep (reduce) 3957.0 (4000.1) -> 3818.7 (3860.1) MB, 4151.3 / 0.0 ms  (+ 0.0 ms in 2 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 4158 ms) (average mu = 0.214, current mu = 0.[26241:0x7f9444300000]   118876 ms: Mark-sweep (reduce) 3957.0 (4000.1) -> 3818.7 (3860.1) MB, 4153.6 / 0.0 ms  (+ 0.0 ms in 2 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 4160 ms) (average mu = 0.189, current mu = 0.

<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x109bfa5f5 node::Abort() (.cold.1) [/usr/local/bin/node]
 2: 0x1088eff49 node::Abort() [/usr/local/bin/node]
 3: 0x1088f012e node::OOMErrorHandler(char const*, bool) [/usr/local/bin/node]
 4: 0x108a673f0 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 5: 0x108a673b3 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 6: 0x108c0b095 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
 7: 0x108c0f0dd v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/usr/local/bin/node]
 8: 0x108c0b9bd v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
 9: 0x108c08edd v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
10: 0x108c07bf8 v8::internal::Heap::HandleGCRequest() [/usr/local/bin/node]
11: 0x108bb1a91 v8::internal::StackGuard::HandleInterrupts() [/usr/local/bin/node]
12: 0x108f9a6d8 v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate*) [/usr/local/bin/node]
13: 0x109343c19 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/usr/local/bin/node]
[1]    26241 abort      node test/array/loop/test-6.js
 */